import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div
                className='bg-secondary flex flex-col justify-center items-center p-10
            w-full h-screen'
            >
                <form onSubmit={submit}
                    className='flex flex-col justify-center items-center w-[20rem] h-fit bg-white shadow-md rounded-md p-boxS gap-3'
                >
                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                        reset link that will allow you to choose a new one.
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end w-full">
                        <PrimaryButton disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                    <div>
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Go Back
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
