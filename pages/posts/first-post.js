import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Hello, I'm Park Hyun-joon, majoring in in information systems. I like bowling and billiards and LOL games. Professor Won Young-jun, I always respect you and thank you for teaching me well!</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}