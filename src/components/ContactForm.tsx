"use client"

import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-xl border shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          {...register("name", { required: "Name is required" })}
          className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
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
          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="What is this regarding?"
          {...register("subject", { required: "Subject is required" })}
          className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
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
          className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
