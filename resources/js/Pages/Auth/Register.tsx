import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <form onSubmit={submit} className="w-[30rem] bg-white shadow-md rounded-md p-boxS space-y-4">
                    <h1>
                        <span className="text-2xl font-bold">Register</span>
                    </h1>
                    <div className="space-y-2">
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full p-2 border rounded-md focus:outline-none"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            placeholder='Input Name'
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full p-2 border rounded-md focus:outline-none"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placeholder='Input Email'
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full p-2 border rounded-md focus:outline-none"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder='Input Password'
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full p-2 border rounded-md focus:outline-none"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <div className="flex items-center justify-end space-x-4">
                        <Link
                            href={route('login')}
                            className="text-sm text-gray-600 hover:text-gray-900"
                        >
                            Already registered?
                        </Link>
                        <PrimaryButton disabled={processing}>Register</PrimaryButton>
                    </div>
                </form>
            </div>

        </GuestLayout>
    );
}
