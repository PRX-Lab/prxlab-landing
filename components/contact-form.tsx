"use client"

import * as React from "react"
import { CheckCircle2, AlertCircle, Loader2, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const projectOptions = [
  "Landing page básica",
  "Landing page customizável",
  "Landing page completa",
  "Sistema personalizado",
  "SaaS",
  "Hospedagem",
  "Manutenção",
  "Outro",
]

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length === 0) return ""
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function formatCurrency(value: string) {
  const digits = value.replace(/\D/g, "")
  if (!digits) return ""
  const amount = Number(digits) / 100
  return amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle")
  const [projectType, setProjectType] = React.useState("")
  const [telefone, setTelefone] = React.useState("")
  const [investimento, setInvestimento] = React.useState("")
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  function validate(form: HTMLFormElement) {
    const data = new FormData(form)
    const next: Record<string, string> = {}
    if (!String(data.get("nome") || "").trim()) next.nome = "Informe seu nome."
    const email = String(data.get("email") || "").trim()
    if (!email) next.email = "Informe seu e-mail."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "E-mail inválido."
    if (!projectType) next.tipo = "Selecione o tipo de projeto."
    if (!String(data.get("descricao") || "").trim()) next.descricao = "Descreva sua necessidade."
    return next
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus("error")
      return
    }
    setStatus("loading")
    try {
      // Simulação de envio — integrar com backend/e-mail futuramente
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus("success")
      form.reset()
      setProjectType("")
      setTelefone("")
      setInvestimento("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-foreground">Mensagem enviada</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Recebemos seus dados e entraremos em contato em breve para avançar com o seu projeto.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          <RotateCcw className="size-4" />
          Enviar outra mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      {status === "error" && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <p>Não foi possível enviar. Verifique os campos destacados e tente novamente.</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" htmlFor="nome" error={errors.nome} required>
          <Input id="nome" name="nome" autoComplete="name" aria-invalid={!!errors.nome} />
        </Field>
        <Field label="Empresa" htmlFor="empresa">
          <Input id="empresa" name="empresa" autoComplete="organization" />
        </Field>
        <Field label="E-mail" htmlFor="email" error={errors.email} required>
          <Input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
        </Field>
        <Field label="Telefone ou WhatsApp" htmlFor="telefone">
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(formatPhone(e.target.value))}
            maxLength={15}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Tipo de projeto" htmlFor="tipo" error={errors.tipo} required>
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger id="tipo" aria-invalid={!!errors.tipo} className="w-full">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                {projectOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Descrição da necessidade" htmlFor="descricao" error={errors.descricao} required>
            <Textarea
              id="descricao"
              name="descricao"
              rows={5}
              aria-invalid={!!errors.descricao}
              placeholder="Conte o que você precisa, o contexto do projeto e os objetivos."
            />
          </Field>
        </div>

        <Field label="Faixa de investimento" htmlFor="investimento" optional>
          <Input
            id="investimento"
            name="investimento"
            inputMode="numeric"
            placeholder="R$ 0,00"
            value={investimento}
            onChange={(e) => setInvestimento(formatCurrency(e.target.value))}
          />
        </Field>
        <Field label="Prazo desejado" htmlFor="prazo" optional>
          <Input id="prazo" name="prazo" placeholder="Opcional" />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  required,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} className="text-sm">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
        {optional && <span className="ml-1 text-xs font-normal text-muted-foreground">(opcional)</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
