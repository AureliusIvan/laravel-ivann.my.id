import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="flex flex-col items-center justify-center h-screen 
            bg-gradient-to-r from-primaryRed via-accent to-secondary
            ">
                <form onSubmit={submit} className="w-[20rem] max-w-full bg-white shadow-md rounded-md p-boxS flex flex-col gap-[1rem]">
                    <h1
                        className="flex items-center justify-center w-full"
                    >
                        <span className="text-2xl font-bold
                        w-full font-poppins
                        text-center text-primaryBlack 
                        ">Log in Admin</span>
                    </h1>
                    <div className="space-y-2">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full border rounded-md focus:outline-none"
                            autoComplete="username"
                            isFocused={true}
                            placeholder='Masukan Email'
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder='Masukan Password'
                            value={data.password}
                            className="block w-full p-2 border rounded-md focus:outline-none"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </div>

                    <div className="space-y-2">
                        <PrimaryButton disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-primaryBlack hover:opacity-50"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <div className="flex gap-[0.5rem]">
                        <p className="text-sm text-primaryBlack">Don't have an account?</p>
                        <Link
                            href={route('register')}
                            className="text-sm text-primaryBlack hover:opacity-50"
                        >
                            Register here
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}