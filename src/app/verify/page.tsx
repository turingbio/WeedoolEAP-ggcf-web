export default function VerifyPage() {
  return <main>verify</main>;
}

/* 
'use client';

import { issueAccount } from '@/lib/api/accounts';
import { toErrorKind } from '@/lib/api/error';
import { verifyOrgCode } from '@/lib/api/org';

async function test(orgCode: string) {
  try {
    await verifyOrgCode(orgCode);
    const account = await issueAccount(orgCode);
    console.log('성공', orgCode, account);
  } catch (error) {
    console.log('실패', orgCode, toErrorKind(error), error);
  }
}

export default function VerifyPage() {
  return (
    <main className="flex gap-2 p-4">
      <button className="bg-amber-200" onClick={() => test('A1B2C3')}>
        정상
      </button>
      <button className="bg-pink-200" onClick={() => test('ZZZZZZ')}>
        틀림
      </button>
      <button className="bg-blue-200" onClick={() => test('ERR500')}>
        서버오류
      </button>
    </main>
  );
}
 */
