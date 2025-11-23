import 'server-only';
import { IProject } from "../common/models"

export const projectRepository = {
  async getProject(id: string): Promise<IProject> {
    if (!id) throw new Error('sda')

    if (id === 'kopis') {
      return {
        tags: ['Branding'],
        name: 'Köpiş — Branding',
        description: 'A branding project for a coworking space that makes room for both ideas and wagging tails — a visual identity that balances professionalism with the playful spirit of pets.',
        descriptors: {
          Role: 'Branding Designer',
          Process: 'Research · Moodboard · Logos & Variants · Visual system',
          Timeline: '6 weeks',
          Toolkit: 'Illustrator · Photoshop',
        },
        components: [
          {
            id: '1',
            name: 'projectImage',
            props: {
              src: '/kopis_banner.png',
              alt: 'Kopis banner'
            }
          },
          {
            id: '2',
            name: 'twoColText',
            props: {
              text1: 'Where brand meets community.',
              text2: 'Köpiş isn’t just a space to work — it’s a place where pets and professionals coexist harmoniously. The old visual identity lacked warmth and cohesion. I crafted a branding system that balances professionalism with playful energy, creating a visual narrative that resonates with both work and pet lovers.'
            }
          },
          {
            id: '3',
            name: 'projectImage',
            props: {
              src: '/kopis_mocks.png',
              alt: 'Kopis mocks'
            }
          },
          {
            id: '4',
            name: 'twoColText',
            props: {
              text1: 'Problem',
              text2: 'The existing brand imagery was inconsistent, lacked personality, and didn’t communicate the pet-friendly promise clearly. Potential members weren’t sure if pets were welcome, nor if the space was serious enough for professional work. The brand needed clarity, warmth, and an identity unique enough to stand out.'
            }
          },
          {
            id: '5',
            name: 'twoColText',
            props: {
              text1: 'Solution',
              text2: 'I designed a fresh logo, defined a cohesive color palette, iconography, and a visual language that bridges the casual with the professional. The identity system includes pet motifs, dog/cat imagery stylized, clean typography, and brand assets that can translate across digital and physical touchpoints.'
            }
          },
          {
            id: '6',
            name: 'projectImage',
            props: {
              src: '/kopis_moodboard.png',
              alt: 'Kopis moodboard',
              objectFit: 'contain'
            }
          },
          {
            id: '7',
            name: 'title',
            props: {
              text: 'A refined yet playful identity where professionalism meets the joy of pets — built to adapt across digital, print, and spatial applications.',
              center: true
            }
          },
          {
            id: '8',
            name: 'projectImage',
            props: {
              src: '/kopis_marketing.png',
              alt: 'Kopis merchandise',
              objectFit: 'contain'
            }
          },
          {
            id: '9',
            name: 'button',
            props: {
              text: 'View Full Case Study',
              href: 'https://google.com'
            }
          },
          {
            id: '10',
            name: 'textContent',
            props: {
              title: 'Outcome',
              text: 'The new brand identity gave Köpiş a confident, friendly face — one that clearly signals pet inclusivity without sacrificing professionalism. Community response was positive: potential clients could instantly see the dual nature of the space (cowork + pet). The identity is ready to scale across signage, digital, and physical interiors.'
            }
          }
        ]
      }
    }

    if (id === 'irth') {
      return {
        tags: ['App Redesign', 'Web Redesign'],
        name: 'Irth Solutions',
        description: 'An enterprise platform for utilities and energy companies to manage assets, risks, and operations — redesigned to transform outdated legacy tools into modern, intuitive, and user-friendly experiences.',
        descriptors: {
          Role: 'UX strategist',
          Process: 'Research · Documentation · Wireframes · Mockups · Usability Feedback',
          Timeline: '13 months',
          Toolkit: 'Figma · Loom',
        },
        components: [
          {
            id: '1',
            name: 'projectImage',
            props: {
              src: '/irth_banner.png',
              alt: 'Irth banner'
            }
          },
          {
            id: '2',
            name: 'twoColText',
            props: {
              text1: 'Transforming legacy design into modern usability.',
              text2: 'Irth’s tools were essential for clients but visually rigid and difficult to navigate. As UX Strategist, I collaborated with designers and developers to transform legacy interfaces into clean, consistent, and user-friendly experiences — ensuring efficiency in workflows while keeping the product trustworthy for enterprise users.'
            }
          },
          {
            id: '3',
            name: 'twoPicture',
            props: {
              src1: '/irth_screenshot1.png',
              alt1: 'Irth map screenshot',
              src2: '/irth_screenshot2.png',
              alt2: 'Irth drawer screenshot',
            }
          },
          {
            id: '4',
            name: 'twoColText',
            props: {
              text1: 'Problem',
              text2: 'The existing platform was highly functional but visually outdated, with cluttered layouts and inconsistent interactions. Users found it difficult to complete tasks efficiently, and the overall design did not reflect the innovation or reliability expected from enterprise software.'
            }
          },
          {
            id: '5',
            name: 'twoColText',
            props: {
              text1: 'Solution',
              text2: 'I contributed to the redesign by documenting existing flows, creating wireframes and mockups, and ensuring user research insights guided decisions. The redesign focused on simplifying navigation, introducing a clearer information hierarchy, and modernizing the interface while preserving the core functionality that users relied on daily.'
            }
          },
          {
            id: '6',
            name: 'screenshots',
            props: {
              screenshots: [
                {
                  img: '/irth_mobile_ss1.png',
                  alt: 'Irth mobile map screenshot',
                },
                {
                  img: '/irth_mobile_ss2.png',
                  alt: 'Irth mobile screenshot',
                },
                {
                  img: '/irth_mobile_ss3.png',
                  alt: 'Irth mobile account screnshot',
                },
                {
                  img: '/irth_mobile_ss4.png',
                  alt: 'Irth mobile projects screenshot',
                },
              ]
            }
          },
          {
            id: '7',
            name: 'twoColText',
            props: {
              text1: 'Part of the ecosystem',
              text2: 'IRTH’s redesign wasn’t limited to one product — it was about creating harmony across an entire ecosystem. From field operations to compliance and training, each platform was reimagined to speak the same visual and functional language.',
            }
          },
          {
            id: '8',
            name: 'presentationCard',
            props: {
              title: 'Utilisphere',
              description: 'As Irth’s core platform, Utilisphere integrates critical workflows for utility operations. Its legacy design was highly functional but visually inconsistent, slowing adoption for new users. My role involved contributing to the redesign with wireframes and prototypes, ensuring the updated interface delivered a more intuitive and cohesive experience across modules.',
              img: '/presentation_card1.png',
              alt: 'Utilisphere screenshot',

            }
          },
          {
            id: '9',
            name: 'presentationCard',
            props: {
              title: 'DigTix',
              description: 'DigTix focuses on excavation tickets and requests, enabling operators to process and monitor excavation work efficiently. The original design made it difficult to track requests quickly. I supported the redesign by streamlining ticket flows into clearer, modern layouts, improving visibility of requests and reducing friction in time-sensitive processes.',
              img: '/presentation_card2.png',
              alt: 'DigTix screenshot',
            }
          },
          {
            id: '10',
            name: 'presentationCard',
            props: {
              title: 'Training',
              description: 'Irth Training provides digital learning modules to onboard and support clients. The initial screens were text-heavy and visually outdated, which limited engagement. I worked on mockups and documentation that restructured the content into a more engaging, visually balanced format, making learning smoother and more accessible for users.',
              img: '/presentation_card3.png',
              alt: 'Training screenshot',
            }
          },
          {
            id: '11',
            name: 'textContent',
            props: {
              title: 'Land, reimagined',
              text: 'Land was the product area where my impact was most visible. Its role is to help utilities manage land rights and relationships with property owners — but its legacy screens were dense, outdated, and visually overwhelming. My focus was to transform those complex, text-heavy layouts into cleaner, intuitive designs that felt approachable while still supporting detailed workflows.\n\nThis redesign was iterative and highly collaborative: I worked closely with account managers, customer service, and developers in weekly reviews. By creating mockups, documenting flows, and refining based on feedback, I helped align business needs with usability improvements. The result was a modernized interface that made navigating critical land data simpler and more professional.'
            }
          },
          {
            id: '12',
            name: 'screenshotShowcase',
            props: {
              screenshots: [
                {
                  src: '/laptop_agreement_ss.png',
                  alt: 'Laptop agreement screenshot'
                },
                {
                  src: '/laptop_construction_ss.png',
                  alt: 'Laptop construction screenshot'
                },
                {
                  src: '/laptop_customers_screenshot.png',
                  alt: 'Laptop customers screenshot'
                },
              ],
              card: {
                title: 'Highlights',
                items: [
                  {
                    title: 'Challenge:',
                    content: 'Outdated screens packed with redundant, repetitive, and poorly organized information.',
                  },
                  {
                    title: 'Impact:',
                    content: 'Redesigned 20+ screens into cleaner, consistent layouts.'
                  },
                  {
                    title: 'Collaboration:',
                    content: 'Weekly reviews with cross-functional teams (account managers, CX, developers).'
                  },
                  {
                    title: 'Role in one line:',
                    content: 'UX Strategist → turning outdated complexity into clarity.'
                  }
                ]
              }
            }


          },
          {
            id: '13',
            name: 'screenshots',
            props: {
              screenshots: [
                {
                  img: '/irth_project_ss.png',
                  alt: 'Irth project screenshot',
                },
                {
                  img: '/irth_new_project_ss.png',
                  alt: 'Irth new project screenshot',
                },
                {
                  img: '/irth_login_ss.png',
                  alt: 'Irth login screnshot',
                }
              ]
            }
          },
          {
            id: '14',
            name: 'textContent',
            props: {
              title: 'Outcome',
              text: 'The redesign replaced rigid, outdated screens with intuitive layouts and a consistent visual language. Users reported smoother task completion and greater confidence in the product’s usability. For Irth, this meant aligning its digital tools with the company’s vision: delivering reliable, modern, and user-centered solutions for critical industries.'
            }
          },
          {
            id: '15',
            name: 'imageWithDescription',
            props: {
              title: 'Not just systems, but smarter operations.',
              text: 'Transforming complex workflows into connected, human-centered solutions.',
              src: '/final_screenshot.png',
              alt: 'Landing page screenshot'
            }
          }
        ]
      }
    }

    if (id === 'jaguar') {
      return {
        tags: ['App Redesign', 'Web Redesign'],
        name: 'Jaguar.co Redesign',
        description: 'Official website for Jaguar Colombia, redesigned to enhance navigation, usability, and alignment with the brand’s global identity.',
        descriptors: {
          Role: 'Product Designer',
          Process: 'Research · Benchmarking · Information Architecture · Wireframes · UI Kit · Prototyping',
          Timeline: '6 weeks (academic project)',
          Toolkit: 'Figma · UXtweak · Whimsical · Photoshop',
        },
        components: [
          {
            id: '1',
            name: 'projectImage',
            props: {
              src: '/jaguar_banner.png',
              alt: 'Jaguar website banner'
            }
          },
          {
            id: '2',
            name: 'twoColText',
            props: {
              text1: 'Elegance engineered into every interaction.',
              text2: 'Jaguar is synonymous with innovation, performance, and timeless design — yet its Colombian website lacked the same refinement users expected from the brand. This redesign focused on creating a digital experience that mirrors Jaguar’s sophistication: intuitive, elegant, and effortlessly functional.'
            }
          },
          {
            id: '3',
            name: 'twoPicture',
            props: {
              src1: '/jaguar_landing_ss1.png',
              alt1: 'Jaguar landing screenshot',
              src2: '/jaguar_landing_ss2.png',
              alt2: 'Jaguar landing screenshot'
            }
          },
          {
            id: '4',
            name: 'twoColText',
            props: {
              text1: 'Problem',
              text2: 'The existing Jaguar.co website was visually appealing but structurally inconsistent. Users struggled to navigate key sections, compare vehicles, or access after-sales information easily. The poor information hierarchy and fragmented UI patterns weakened the brand’s digital perception, making it feel less premium than its global counterparts.'
            }
          },
          {
            id: '5',
            name: 'twoColText',
            props: {
              text1: 'Solution',
              text2: 'I reimagined the site through a user-centered approach, restructuring the information architecture and designing clear task flows for key journeys — from vehicle discovery to service booking. I created a modular UI kit aligned with Jaguar’s visual standards, ensuring coherence across layouts while enhancing usability and visual balance.'
            }
          },
          {
            id: '6',
            name: 'projectImage',
            props: {
              src: '/jaguar_moodboard.png',
              alt: 'Jaguar moodboard',
              objectFit: 'contain'
            }
          },
          {
            id: '7',
            name: 'title',
            props: {
              text: 'A seamless digital experience that mirrors Jaguar’s sophistication — blending performance, clarity, and elegance across every screen.',
              center: true
            }
          },
          {
            id: '8',
            name: 'twoPicture',
            props: {
              src1: '/car_builder_ss.png',
              alt1: 'Car builder first screenshot',
              objectFit1: 'contain',
              src2: '/car_builder_ss2.png',
              alt2: 'Car builder second screenshot',
              objectFit2: 'cover'
            }
          },
          {
            id: '9',
            name: 'title',
            props: {
              text: 'Design Thinking Process',
              subText: 'How I start...'
            }
          },
          {
            id: '10',
            name: 'projectImage',
            props: {
              src: '/thinking_process.png',
              alt: 'Thinking process',
              objectFit: 'contain'
            }
          },
          {
            id: '11',
            name: 'textContent',
            props: {
              title: 'Jaguar.co: performance redefined through design.',
              text: 'Jaguar isn’t just about cars — it’s about the experience of power, precision, and timeless elegance. The redesigned website brings that vision to life through a refined digital journey where navigation feels effortless and every interaction mirrors the brand’s craftsmanship. From streamlined vehicle discovery to a cohesive visual system, Jaguar.co transforms luxury into clarity — a digital reflection of motion, innovation, and sophistication.',
            }
          },
          {
            id: '12',
            name: 'button',
            props: {
              text: 'View Full Case Study',
              href: 'https://google.com'
            }
          },
          {
            id: '13',
            name: 'imageWithDescription',
            props: {
              title: 'Not just luxury, but lifestyle.',
              text: 'Driving a digital experience that feels powerful, personal, and unmistakably Jaguar.',
              src: '/jaguar_laptop_mockup.png',
              alt: 'Jaguar laptop mockup',
            }
          }
        ]
      }
    }

    return {
      tags: ['Branding', 'App Design'],
      name: 'Bacano Bites',
      description: 'Native mobile app for an 80s-inspired Colombian restaurant, with reservations, in-app ordering, real-time tracking, and gamified interactions.',
      descriptors: {
        Role: 'Branding & Product Designer',
        Process: 'Branding · Research · Wireframes · Prototypes · Usability Testing',
        Timeline: '13 weeks',
        Toolkit: 'Illustrator · Photoshop · UXtweak · Figma',
      },
      components: [
        {
          id: '1',
          name: 'projectImage',
          props: {
            src: '/bacano_banner.png',
            alt: 'Bacano bites'
          }
        },
        {
          id: '2',
          name: 'twoColText',
          props: {
            text1: 'A brand you can taste, an app you can trust.',
            text2: 'Bacano Bites started as a vibrant Colombian fast-food brand with a retro 80s aesthetic, but it needed a digital layer to match its bold personality. I designed both the branding system and a native app that brought the concept to life: from neon-inspired visuals to a seamless ordering experience.'
          }
        },
        {
          id: '3',
          name: 'screenshots',
          props: {
            screenshots: [
              {
                img: '/bacano_splash.png',
                alt: 'Bacano bites SplashScreen'
              },
              {
                img: '/bacano_dashboard.png',
                alt: 'Bacano bites dashboard'
              },
              {
                img: '/bacano_detail.png',
                alt: 'Bacano bites food screenshot'
              },
              {
                img: '/bacano_profile.png',
                alt: 'Bacano bites profile screenshot'
              },
            ]
          }
        },
        {
          id: '4',
          name: 'twoColText',
          props: {
            text1: 'Problem',
            text2: 'Bacano Bites had the concept and the food, but lacked a clear brand identity and a digital layer to support the customer experience. Without a distinctive logo or cohesive system, the brand risked blending into the market. Inside the restaurant, long waits, missed orders, and lack of visibility frustrated customers and undermined the playful, retro vibe.'
          }
        },
        {
          id: '5',
          name: 'twoColText',
          props: {
            text1: 'Solution',
            text2: 'I approached Bacano Bites as a complete experience. First, I built a vibrant brand identity inspired by neon aesthetics and Colombian culture. Then, I designed a native mobile app that complemented the brand with features like QR check-ins, reservations, real-time order tracking, and waiter support — ensuring consistency between brand personality and service delivery.'
          }
        },
        {
          id: '6',
          name: 'projectImage',
          props: {
            src: '/bacano_moodboard.png',
            alt: 'Bacano bites moodboard',
            objectFit: 'contain'
          }
        },
        {
          id: '7',
          name: 'title',
          props: {
            text: 'A bold identity inspired by neon lights and Colombian flavor — designed to be versatile across signage, menus, and digital platforms.',
            center: true
          }
        },
        {
          id: '8',
          name: 'projectImage',
          props: {
            src: '/bacano_merch.png',
            alt: 'Bacano bites merchandise',
            objectFit: 'contain'
          }
        },
        {
          id: '9',
          name: 'title',
          props: {
            text: 'Design Thinking Process',
            subText: 'How I start...'
          }
        },
        {
          id: '10',
          name: 'projectImage',
          props: {
            src: '/thinking_process.png',
            alt: 'Thinking process',
            objectFit: 'contain'
          }
        },
        {
          id: '11',
          name: 'textContent',
          props: {
            title: 'Bacano Bites: technology with flavor, attitude with style.',
            text: 'More than a restaurant, Bacano Bites is a curated experience where Colombian flavor meets 80s-inspired energy. The app brings this vision to life — scan your table, order, track your meal in real time, play while you wait, and unlock rewards. Technology doesn’t replace service here; it elevates it. Bacano Bites is flavor, it’s attitude, and the new standard for dining with a bacano twist.'
          }
        },
        {
          id: '12',
          name: 'button',
          props: {
            text: 'View Full Case Study',
            href: 'https://google.com'
          }
        },
        {
          id: '13',
          name: 'textContent',
          props: {
            title: 'Outcome',
            text: 'The Bacano Bites app streamlined the dining experience by reducing wait times and minimizing errors while giving customers full control of their journey. It also reinforced the restaurant’s retro-inspired identity, proving how design can enhance both operations and brand experience.'
          }
        },
        {
          id: '14',
          name: 'imageWithDescription',
          props: {
            title: 'Not just bites, but moments.',
            text: 'Turning a simple meal into a seamless, memorable experience.',
            src: '/bacano_mockups.png',
            alt: 'Bacano bites mockups'
          }
        },

      ]
    }

  }

}
