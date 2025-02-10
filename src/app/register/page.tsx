"use client"
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useState } from 'react';
 
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const signUp = async () => {
    const { data, error } = await authClient.signUp.email({ 
        email, 
        password, 
        name, 
        
     }, { 
        onRequest: (ctx) => { 
         //show loading
        }, 
        onSuccess: (ctx) => { 
          console.log('User created', ctx.data);    
        }, 
        onError: (ctx) => { 
          alert(ctx.error.message); 
        }, 
      }); 
  };
 
  return (
    <div className="bg-slate-900 max-w-52 h-screen w-full flex flex-col gap-3">
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-slate-100 text-slate-900" onClick={signUp}>Sign Up</button>
    </div>
  );
}


