'use client'

import dynamic from 'next/dynamic';
const Stream = dynamic(() => import('../../components/Stream'));

const StreamPage = () => <Stream />;

export default StreamPage;
