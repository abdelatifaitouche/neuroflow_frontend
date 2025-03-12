import { LoginForm } from "@/components/ui/login-form"


export default function LoginPage() {


  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[#232323] p-6 md:px-10 py-0 ">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>

    </div>
  )
}
