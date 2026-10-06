'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getStoredUser } from '../../utils/auth';

export default function FreeTrialRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      router.replace('/user-account/workspace');
    } else {
      router.replace('/user-account');
    }
  }, [router]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', color: '#64748b' }}>
      Loading workspace...
    </div>
  );
}
