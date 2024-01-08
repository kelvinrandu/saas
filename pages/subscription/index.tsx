import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { signIn, getProviders } from 'next-auth/react';
import illustration from '/public/img/auth/auth.png';
import { HSeparator } from '@/components/separator/Separator';
import DefaultAuth from '@/components/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import NavLink from '@/components/link/NavLink';
import { getServerSession } from 'next-auth/next';
import { loadStripe } from '@stripe/stripe-js';
import { authOptions } from '../../lib/auth';
import { cn } from '../../lib/utils';
import { buttonVariants } from '@/components/button';
import { MainNav } from '@/components/main-nav';
import { stripe } from '../../lib/stripe';

//@ts-ignore
const asyncStripe = loadStripe('pk_live_Ns5G5TpX05EY6CzMH7WpOtBC00pn6QpL1D');

export default function SignUp({
  providers,
  products,
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const subscribeCustomer = async (
    product: any,
    price: any,
    user: any,
    recurring: any,
  ) => {
    console.log('subscriber-->', product, price, user, recurring);

    try {
      const _stripe = await asyncStripe;
      const res = await fetch('/api/stripe/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          name: user?.name,
          email: user?.email,
          // id: props.user?.id,
          productId: product,
          priceId: price,
          recurring,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const { sessionId } = await res.json();
      console.log('session from client-->', sessionId);
      //@ts-ignore
      const { error } = await _stripe.redirectToCheckout({ sessionId });
      console.log(error);
      // if (error) {
      //   router.push("/error");
      // }
    } catch (err) {
      console.log(err);
      // router.push("/error");
    }
  };
console.log('prod',products)
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav />

          <nav>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <hr className="border-slate-200" />
        <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
              Pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
              Our AI-powered productivity app is designed to enhance your
              workflow and improve overall efficiency. Explore some of our
              useful features that make our app a valuable asset for users
              seeking to optimize their work experience.
            </p>
          </div>
          <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3">
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl"
                >
                  <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                      <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
                    </svg>
                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-100">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-100">
                        {product.description}
                      </p>
                    </div>
                    {product.name == 'Gold Premium' ? (
                      <>
                        {' '}
                        <button
                          onClick={() =>
                            subscribeCustomer(
                              product?.id,
                              product?.default_price,
                              user,
                              true,
                            )
                          }
                          className={cn(buttonVariants({ size: 'lg' }))}
                        >
                          Subscribe
                        </button>
                      </>
                    ) : (
                      <>
                        {' '}
                        <button
                          onClick={() =>
                            subscribeCustomer(
                              product?.id,
                              product?.default_price,
                              user,
                              false,
                            )
                          }
                          className={cn(buttonVariants({ size: 'lg' }))}
                        >
                          Subscribe
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  let products = await stripe.products.list({
    active: true,
    limit: 10,
    // expand:['data.products'],
  });

  if (!session) {
    return { redirect: { destination: '/auth/login' } };
  }

  const providers = await getProviders();

  return {
    props: {
      providers: providers ?? [],
      products: products?.data ?? [],
      user: session?.user ?? [],
    },
  };
}
