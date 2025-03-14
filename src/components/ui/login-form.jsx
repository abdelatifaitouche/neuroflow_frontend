import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthContext from "@/context/AuthContext"
import { useContext } from "react"
import { ScaleLoader } from "react-spinners"
export function LoginForm(){


  let {login , isLoading} = useContext(AuthContext)

  return (
    <div className={cn("flex flex-col items-center overflow-y-hidden")}>
      <img
              src="assets/images/logo_neuroflow.png"
              alt="Image"
              className="w-50"
            />
      <Card className="overflow-hidden h-[65vh] w-[25vw] bg-[#232323] text-gray-300 border-2 border-[#00FFCC]">
        <CardContent className="grid p-2 h-full">
          <form onSubmit={login} className="p-6 md:px-8 md:py-2 h-full">
            <div className="flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col items-center text-center gap-1">
                <h1 className="text-3xl font-bold">WELCOME</h1>
                <p className="text-balance text-gray-300 text-sm">
                  Login to your NeuroFlow Account
                </p>
              </div>

              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name = 'email'
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input name='password' id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-[#00FFCC] text-black">
                {
                  isLoading?<ScaleLoader height={20} /> : 'Login'
                }
              
              </Button>       
            </div>
          </form>
          
        </CardContent>
      </Card>
      <img
              src="assets/images/neuroflow_logo_snd.png"
              alt="Image"
              className="w-50"
            />
    </div>
  )
}


/**
 * <div className="relative hidden bg-muted md:block">
            <img
              src="assets/images/LoginPageBG.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
 */


          /**
           *  <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden h-[70vh]">
        <CardContent className="grid p-2 md:grid-cols-2 h-full">
          <form onSubmit={login} className="p-6 md:p-8 h-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your NeuroFlow Account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name = 'email'
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input name='password' id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              
             
              
              
            </div>
          </form>
          
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
           */