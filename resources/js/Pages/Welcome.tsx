import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <h1>Test</h1>
        </>
    );
}
