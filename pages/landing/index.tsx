import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"
import { getServerSession } from "next-auth/next"
import Link from "next/link"
import { authOptions } from "../../lib/auth";
import { cn } from "../../lib/utils"
import { buttonVariants } from "@/components/button"
import { MainNav } from "@/components/main-nav"
import hero from "../../public/img/hero.png"
export default function LandingPage() {
  return (
    <>

<div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
    
            <MainNav  />
       
          <nav>
          <Link
                href="/auth/login"
                className={cn(buttonVariants({ size: "sm" }), "px-4")}
              >
                Login
              </Link>
            {/* {user ? (
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm" }), "px-4")}
              >
                Logout
              </Link>
            ) : (
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm" }), "px-4")}
              >
                Login
              </Link>
            )} */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        
        
   
      <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
        <Image src={hero} width={250} alt="Hero image" priority />
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            Introducing AI Productivity Assistant
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            We&apos;re building a cutting-edge web app that will use AI-powered
            tools like ChatGPT to help users improve their productivity. Join us
            on this journey to discover how AI can transform the way you work.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
          <Link
            // href={siteConfig.links.github}
             href="/all-templates"
          
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Chat with your data
          </Link>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            Our AI-powered productivity app is designed to enhance your workflow
            and improve overall efficiency. Explore some of our useful features
            that make our app a valuable asset for users seeking to optimize
            their work experience.
          </p>
        </div>
        <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Business</h3>
                <p className="text-sm text-slate-100">
                  Plans, Proposals, Letters, Presentations, Reports.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Marketing</h3>
                <p className="text-sm text-slate-100">
                  Plans, Newsletters, Blogs, Social Media.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">ChatBots</h3>
                <p className="text-sm text-slate-100">
                  PDF, CSV, Databases, Text, Websites, Youtube
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Data Analysis</h3>
                <p className="text-sm text-slate-100">
                  Finance, Sales, Employee, Customer, other business data.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Courses</h3>
                <p className="text-sm text-slate-100">
                  Ebook, Video, Audio, Podcast, Transcripts, SOPs
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Summarization</h3>
                <p className="text-sm text-slate-100">
                  Business, Legal, Research, Agreements, Reports.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Academic Writing</h3>
                <p className="text-sm text-slate-100">
                  Research Papers, Thesis, Reports, Journals, Articles.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Branding</h3>
                <p className="text-sm text-slate-100">
                  Logo, Flyer, Brochure, Poster, Business Card.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Smart Email</h3>
                <p className="text-sm text-slate-100">
                  Emails, Email Sequency, Email Response.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            With these powerful features and more, WorkerBull app aims to
            revolutionize the way users work, ultimately boosting productivity
            and streamlining daily tasks.
          </p>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-1xl font-bold leading-[1.1] tracking-tighter sm:text-2xl md:text-4xl">
            Start Free Trial
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            Don&apos;t miss the opportunity to experience the transformative
            power of our AI-driven productivity app. Start your free trial now
            and discover how our advanced features can revolutionize your
            workflow, boost efficiency, and elevate your work to new heights.
            There&apos;s never been a better time to harness the power of AI and
            unlock your full potential. Begin your journey to enhanced
            productivity today!
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
      
        </div>
      </section>
        
        </main>
 
    </div>




    </>
  )
}
