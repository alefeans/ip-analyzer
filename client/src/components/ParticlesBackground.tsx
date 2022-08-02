import React, { useEffect, useState } from 'react';
import { ColorMode } from '@chakra-ui/react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine';

type ParticlesBackgroundProps = {
  colorMode: ColorMode
}

type ParticleColors = '#000000' | '#ffffff'

const particlesColorsMapping: Record<ColorMode, ParticleColors> = {
  light: '#000000',
  dark: '#ffffff'
}

function ParticlesBackground({ colorMode }: ParticlesBackgroundProps) {

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  }

  const [color, setColor] = useState<ParticleColors>(particlesColorsMapping[colorMode])

  useEffect(() => {
    setColor(particlesColorsMapping[colorMode])
  }, [colorMode])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: color,
          },
          links: {
            color: color,
            distance: 100,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1400,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground