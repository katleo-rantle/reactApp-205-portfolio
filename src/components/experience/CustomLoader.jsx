import { useProgress } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomLoader({ onFinish }) {
  const { progress, loaded, total, item } = useProgress();
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const progressTextRef = useRef(null); // Ref for the main overlay container
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progress === 100) {
      // Animate curtains opening
      gsap.timeline()
        .to(progressBarRef.current, {
          width: `${progress}%`,
          duration: 2,
          ease: 'power2.out',
        })
        .to(leftCurtain.current, {
          x: '-100%',
          duration: 3,
          ease: 'power4.inOut',
        })
        .to(
          rightCurtain.current,
          {
            x: '100%',
            duration: 3,
            ease: 'power4.inOut',
            onComplete: onFinish, // trigger callback to resume canvas
          },
          '<'
        )
        .to(
          progressTextRef.current,
          {
            opacity: 0,
            y: -800,
            duration: 3,
            ease: 'power4.inOut',
          },
          '<'
        );
    }
  }, [progress]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Curtains */}
      <div
        ref={leftCurtain}
        className='absolute left-0 top-0 h-full w-1/2 bg-gray-900'
      />
      <div
        ref={rightCurtain}
        className='absolute right-0 top-0 h-full w-1/2 bg-gray-900'
      />

      {/* Progress text */}

      <div
        className='flex flex-col text-white z-50 text-xl font-bold'
        ref={progressTextRef}
      >
        <div className='w-lg flex items-center flex-col  p-4  '>
        <h1 className='text-2xl font-semibold'>Loading Assets...</h1>

        <p className='mt-2 text-sm'>{item || 'Initializing'}</p>
        </div>
        <div className='w-lg h-[10px] bg-black mt-5 z-50  rounded-full border-black'>
          <div ref={progressBarRef} className='h-full w-0 bg-cyan-500 rounded-full' />
        </div>
      </div>
    </div>
  );
}
