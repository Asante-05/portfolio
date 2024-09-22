'use client'
import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    try {
      await loadFull(engine);
  } catch (error) {
      alert("Failed to load particles:", error);
  }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const particlesOptions = {
    
      fullScreen: { enable: false },
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          }
        },
      },
      particles: {
        color: {
          value: '#fff'
        },
        links: {
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 1500
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: {min: 1, max:5},
        },
      },
      detectRetina: true,
  
  };

  return (
    <Particles
      className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none
             z-40 flex"
      // className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      url=""
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};
export default Particle;

// import React, { useCallback } from "react";
// import { Particles } from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Particle = () => {
//   const particlesInit = useCallback(async (particles) => {
//     console.log("Particles.js library initialized!", particles);

//     try {
//       await loadFull(particles);
//     } catch (error) {
//       console.error("Failed to load particles:", error);
//     }
//   }, []);

//   const particlesLoaded = useCallback((container) => {
//     console.log("Particles.js container loaded!", container);
//   }, []);

//   const particlesOptions = {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           area: 800,
//         },
//       },
//       color: {
//         value: "#a68e2e",
//       },
//       shape: {
//         type: "circle",
//       },
//       opacity: {
//         value: 0.5,
//       },
//       size: {
//         value: {
//           min: 1,
//           max: 5,
//         },
//       },
//       move: {
//         enable: true,
//         speed: 1,
//         direction: "none",
//         outMode: "bounce",
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#f5d393",
//         opacity: 0.5,
//         width: 1,
//       },
//       interactivity: {
//         detectsOn: "canvas",
//         events: {
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//     },
//     detectRetina: true,
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={particlesOptions}
//     />
//   );
// };

// export default Particle;
