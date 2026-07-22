"use client"

import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Send } from "lucide-react"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success("Message sent successfully!")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-muted-foreground ml-1">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
            className={`bg-surface-alt border-border rounded-xl px-4 py-6 focus-visible:ring-primary/50 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          {errors.name && <p className="text-sm text-destructive ml-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground ml-1">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            className={`bg-surface-alt border-border rounded-xl px-4 py-6 focus-visible:ring-primary/50 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          {errors.email && <p className="text-sm text-destructive ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-muted-foreground ml-1">Subject</Label>
        <Input
          id="subject"
          placeholder="What is this regarding?"
          {...register("subject", { required: "Subject is required" })}
          className={`bg-surface-alt border-border rounded-xl px-4 py-6 focus-visible:ring-primary/50 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.subject && <p className="text-sm text-destructive ml-1">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-foreground ml-1">Message</Label>
        <Textarea
          id="message"
          placeholder="Your message here..."
          rows={5}
          {...register("message", { 
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters"
            }
          })}
          className={`bg-surface-alt border-border rounded-xl px-4 py-4 focus-visible:ring-primary/50 shadow-[0_1px_2px_rgba(15,23,42,0.04)] resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.message && <p className="text-sm text-destructive ml-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full sm:w-auto rounded-full px-8 h-12 text-[15px] gap-2 font-medium bg-foreground text-background hover:bg-foreground/90 transition-all shadow-[0_4px_12px_rgba(15,23,42,0.1)] hover:-translate-y-[1px]" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send className="w-4 h-4" />}
      </Button>
    </form>
  )
}
