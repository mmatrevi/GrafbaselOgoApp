"use client";
import { getProviders, signIn } from "next-auth/react"
import { useState, useEffect } from "react";

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callBackUrl: string;
    signinUrlParams: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();

            console.log(res);

            //setProviders(res);
        }
    }, [])

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, i) => (
                    <button key={i}></button>
                ))}
            </div>
        )
    }
}

export default AuthProviders