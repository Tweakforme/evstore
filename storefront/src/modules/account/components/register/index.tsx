"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Join EV Store
      </h1>
      <p className="text-center text-gray-600 text-sm mb-8">
        Create your account to access premium EV solutions and exclusive member benefits.
      </p>
      
      <form className="w-full flex flex-col space-y-4" action={formAction}>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
        </div>
        
        <Input
          label="Email address"
          name="email"
          required
          type="email"
          autoComplete="email"
          data-testid="email-input"
        />
        
        <Input
          label="Phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          data-testid="phone-input"
        />
        
        <Input
          label="Password"
          name="password"
          required
          type="password"
          autoComplete="new-password"
          data-testid="password-input"
        />

        <ErrorMessage error={message} data-testid="register-error" />
        
        <p className="text-center text-gray-600 text-sm mt-6">
          By creating an account, you agree to our{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="text-emerald-600 hover:text-emerald-700 underline"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="text-emerald-600 hover:text-emerald-700 underline"
          >
            Terms of Service
          </LocalizedClientLink>
          .
        </p>
        
        <SubmitButton 
          className="w-full mt-6 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group" 
          data-testid="register-button"
        >
          <span className="flex items-center justify-center gap-2">
            Create Account
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
        </SubmitButton>
      </form>
      
      <p className="text-center text-gray-600 text-sm mt-6">
        Already have an account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-emerald-600 hover:text-emerald-700 underline"
        >
          Sign in here
        </button>
      </p>
    </div>
  )
}

export default Register