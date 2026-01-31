import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = '  ';
export const size = {
  width: 1,
  height: 1,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: 'transparent',
        }}
      />
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
