"use client"; // Required for Next.js App Router (useEffect runs on client-side)
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
  });

  // Initialize Swiper for testimonials
  new Swiper('.testimonial-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Initialize Swiper for gallery
  new Swiper('.gallery-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');


 

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // GSAP animations
  // Hero section animations
  gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2
  });

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
  });

  gsap.from('.hero-btn', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.6,
    stagger: 0.2
  });

  gsap.from('.hero-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.8
  });

  // Animate section titles
  gsap.utils.toArray('.section-title').forEach((title: any) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 0.8
    });
  });

  // Animate category cards
  gsap.utils.toArray('.category-card').forEach((card: any, i: number) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: i * 0.1
    });
  });

  // Animate partner logos
  gsap.utils.toArray('.partner-logo').forEach((logo: any, i: number) => {
    gsap.from(logo, {
      scrollTrigger: {
        trigger: logo,
        start: 'top 90%',
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1
    });
  });

  // Floating animation for decorative elements
  gsap.to('.floating-element', {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
});

// Create the HTML structure
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Scroll to top button -->
  <button id="scroll-top" class="scroll-top" aria-label="Scroll to top">
    <i class="fas fa-arrow-up"></i>
  </button>

  <!-- Header/Navigation -->
  <header class="fixed w-full z-50 bg-primary/95 backdrop-blur-sm shadow-md">
    <div class="container mx-auto px-4 py-4">
      <nav class="flex justify-between items-center">
        <a href="#" class="text-white text-2xl font-bold font-display">Cherished<span class="text-white/80">Connect</span></a>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#categories" class="nav-link">Categories</a>
          <a href="#gallery" class="nav-link">Gallery</a>
          <a href="#partners" class="nav-link">Partners</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button id="menu-toggle" class="md:hidden text-white focus:outline-none">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </nav>
      
      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4">
        <div class="flex flex-col space-y-4">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#categories" class="nav-link">Categories</a>
          <a href="#gallery" class="nav-link">Gallery</a>
          <a href="#partners" class="nav-link">Partners</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero-gradient min-h-screen flex items-center pt-20">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-white">
          <h1 class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">Elevate Your Corporate Gifting Experience</h1>
          <p class="hero-subtitle text-lg md:text-xl opacity-90 mb-8">Thoughtful, personalized gifts that strengthen business relationships and celebrate achievements.</p>
          <div class="flex flex-wrap gap-4">
            <a href="#categories" class="hero-btn btn-secondary">Explore Collections</a>
            <a href="#contact" class="hero-btn btn-primary bg-white text-primary">Get in Touch</a>
          </div>
        </div>
        <div class="hero-image relative">
          <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Premium Corporate Gifts" class="rounded-lg shadow-2xl w-full">
          <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg" data-aos="fade-up">
            <p class="text-dark font-bold">Trusted by 50+ corporates </p>
            <div class="flex items-center mt-2">
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <i class="fas fa-star text-yellow-400"></i>
              <span class="ml-2 text-gray-600">5.0 (500+ reviews)</span>
            </div>
          </div>
          <div class="floating-element absolute -top-8 -right-8 bg-accent text-white p-3 rounded-full shadow-lg transform rotate-12" data-aos="fade-left">
            <i class="fas fa-gift text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 class="section-title">Crafting Memorable Corporate Gifting Experiences</h2>
          <p class="text-gray-600 mb-6">At Cherished, we understand that a thoughtful gift can strengthen business relationships, boost employee morale, and create lasting impressions. Our premium corporate gifting solutions are designed to help you express appreciation and build connections.</p>
          <p class="text-gray-600 mb-6">With over a decade of experience, we've helped hundreds of companies create meaningful gifting experiences that align with their brand values and objectives.</p>
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="100">
              <div class="text-primary text-2xl"><i class="fas fa-medal"></i></div>
              <div>
                <h3 class="font-bold text-lg">Premium Quality</h3>
                <p class="text-gray-600">Carefully curated high-quality products</p>
              </div>
            </div>
            <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="200">
              <div class="text-primary text-2xl"><i class="fas fa-paint-brush"></i></div>
              <div>
                <h3 class="font-bold text-lg">Customization</h3>
                <p class="text-gray-600">Personalized to reflect your brand</p>
              </div>
            </div>
            <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="200">
              <div class="text-primary text-2xl"><i class="fas fa-paint-brush"></i></div>
              <div>
                <h3 class="font-bold text-lg">Festive Gifting</h3>
                <p class="text-gray-600">Holi, Diwali , Chrismas Celeberation</p>
              </div>
            </div>
            <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="300">
              <div class="text-primary text-2xl"><i class="fas fa-truck"></i></div>
              <div>
                <h3 class="font-bold text-lg">Direct Delivery</h3>
                <p class="text-gray-600">Seamless shipping </p>
              </div>
            </div>
            <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="400">
              <div class="text-primary text-2xl"><i class="fas fa-headset"></i></div>
              <div>
                <h3 class="font-bold text-lg">Dedicated Support</h3>
                <p class="text-gray-600">End-to-end assistance</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
          <div class="space-y-4">
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" alt="Corporate Gift" class="rounded-lg shadow-md h-40 w-full object-cover">
            <img src="https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=1024&q=80" alt="Corporate Gift" class="rounded-lg shadow-md h-64 w-full object-cover">
          </div>
          <div class="space-y-4 mt-8">
            <img src="https://images.unsplash.com/photo-1577359472653-792a974e6be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" alt="Corporate Gift" class="rounded-lg shadow-md h-64 w-full object-cover">
            <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" alt="Corporate Gift" class="rounded-lg shadow-md h-40 w-full object-cover">
          </div>
        </div>
      </div>
    </div>
    
  </section>

  <!-- Categories Section -->
 <section id="categories" class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center mx-auto" data-aos="fade-up">Gift Collections</h2>
    <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
      Explore our diverse range of corporate gifting solutions designed for every occasion and purpose.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Onboarding Kits -->
      <div class="category-card card-hover h-80 relative overflow-hidden rounded-lg shadow-lg" >
        <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1024&q=80" 
          alt="Onboarding kits for welcoming new team members" 
          class="w-full h-full object-cover">
        <div class="category-content absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
          <h3 class="text-2xl font-bold mb-2">Onboarding Kits</h3>
          <p class="text-white/90 mb-4">Welcome new team members with thoughtfully curated kits that make them feel valued from day one.</p>
          <a href="#contact" class="text-white inline-flex items-center font-medium hover:underline">
            Explore <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <!-- Appreciation Gifts -->
      <div class="category-card card-hover h-80 relative overflow-hidden rounded-lg shadow-lg" >
        <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1024&q=80" 
          alt="Premium gifts for employee appreciation" 
          class="w-full h-full object-cover">
        <div class="category-content absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
          <h3 class="text-2xl font-bold mb-2">Appreciation Gifts</h3>
          <p class="text-white/90 mb-4">Recognize outstanding performance and milestones with premium gifts that show genuine appreciation.</p>
          <a href="#contact" class="text-white inline-flex items-center font-medium hover:underline">
            Explore <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <!-- Festive Gifts -->
      <div class="category-card card-hover h-80 relative overflow-hidden rounded-lg shadow-lg" >
        <img src="https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=1024&q=80" 
          alt="Festive gifts for holidays and special occasions" 
          class="w-full h-full object-cover">
        <div class="category-content absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
          <h3 class="text-2xl font-bold mb-2">Festive Gifts</h3>
          <p class="text-white/90 mb-4">Celebrate holidays and special occasions with seasonal gifts that spread joy and strengthen connections.</p>
          <a href="#contact" class="text-white inline-flex items-center font-medium hover:underline">
            Explore <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <!-- Executive Gifts -->
      <div class="category-card card-hover h-80 relative overflow-hidden rounded-lg shadow-lg" >
        <img src="https://images.unsplash.com/photo-1577359472653-792a974e6be2?auto=format&fit=crop&w=1024&q=80" 
          alt="High-end executive gifts for leadership" 
          class="w-full h-full object-cover">
        <div class="category-content absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
          <h3 class="text-2xl font-bold mb-2">Executive Gifts</h3>
          <p class="text-white/90 mb-4">Impress leadership and key stakeholders with sophisticated, high-end gifts that reflect their status.</p>
          <a href="#contact" class="text-white inline-flex items-center font-medium hover:underline">
            Explore <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <!-- Customized Gifts -->
      <div class="category-card card-hover h-80 relative overflow-hidden rounded-lg shadow-lg" >
        <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1024&q=80" 
          alt="Customized gifts with branding and personalization" 
          class="w-full h-full object-cover">
        <div class="category-content absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
          <h3 class="text-2xl font-bold mb-2">Customized Gifts</h3>
          <p class="text-white/90 mb-4">Personalized gifts featuring your brand elements, creating memorable and unique experiences.</p>
          <a href="#contact" class="text-white inline-flex items-center font-medium hover:underline">
            Explore <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <!-- Event Gifts -->
      <div class="category-card card-hover h-80 relative overflow-hidden rounded-lg shadow-lg">
        <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1024&q=80" 
          alt="Corporate event gifts for attendees and speakers" 
          class="w-full h-full object-cover">
        <div class="category-content absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
          <h3 class="text-2xl font-bold mb-2">Event Gifts</h3>
          <p class="text-white/90 mb-4">Make your corporate events memorable with thoughtful gifts for attendees and speakers.</p>
          <a href="#contact" class="text-white inline-flex items-center font-medium hover:underline">
            Explore <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


  <!-- Gallery Section -->
  <section id="gallery" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="section-title centered text-center mx-auto" data-aos="fade-up">Gift Gallery</h2>
      <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">Browse through our collection of premium corporate gifts that have delighted our clients.</p>
      
      <div class="swiper gallery-swiper" data-aos="fade-up" data-aos-delay="200">
        <div class="swiper-wrapper pb-12">
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Premium Gift Set" class="w-full h-64 object-cover rounded-lg">
              <div class="gallery-overlay">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-bold">Premium Gift Set</h3>
                  <p class="text-sm mt-2">Luxury stationery and accessories</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Tech Gift Box" class="w-full h-64 object-cover rounded-lg">
              <div class="gallery-overlay">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-bold">Tech Gift Box</h3>
                  <p class="text-sm mt-2">Modern gadgets for the tech enthusiast</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1577359472653-792a974e6be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Wellness Package" class="w-full h-64 object-cover rounded-lg">
              <div class="gallery-overlay">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-bold">Wellness Package</h3>
                  <p class="text-sm mt-2">Self-care items for employee wellbeing</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Executive Gift Set" class="w-full h-64 object-cover rounded-lg">
              <div class="gallery-overlay">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-bold">Executive Gift Set</h3>
                  <p class="text-sm mt-2">Sophisticated items for leadership</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1608484048400-c4e981ff8d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Welcome Kit" class="w-full h-64 object-cover rounded-lg">
              <div class="gallery-overlay">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-bold">Welcome Kit</h3>
                  <p class="text-sm mt-2">First-day essentials for new hires</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Holiday Gift Box" class="w-full h-64 object-cover rounded-lg">
              <div class="gallery-overlay">
                <div class="text-center text-white p-4">
                  <h3 class="text-xl font-bold">Holiday Gift Box</h3>
                  <p class="text-sm mt-2">Seasonal celebration package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="section-title centered text-center mx-auto" data-aos="fade-up">What Our Clients Say</h2>
      <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">Hear from businesses that have transformed their corporate gifting experience with us.</p>
      
      <div class="swiper testimonial-swiper" data-aos="fade-up" data-aos-delay="200">
        <div class="swiper-wrapper pb-12">
          <div class="swiper-slide">
            <div class="testimonial-card h-full">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-bold">Ritika Singhal</h4>
                  <p class="text-gray-600 text-sm">HR Director, TechGlobal</p>
                </div>
              </div>
              <p class="text-gray-700 mb-4">"GiftCraft transformed our onboarding process. The welcome kits they created for our new hires were thoughtful, high-quality, and perfectly aligned with our brand. The personalized touch made a significant impact on our new employees' first impressions."</p>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="testimonial-card h-full">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-bold">Santosh Kumar</h4>
                  <p class="text-gray-600 text-sm">CEO, Innovate Solutions</p>
                </div>
              </div>
              <p class="text-gray-700 mb-4">"The executive gift sets we ordered for our client appreciation event were exceptional. The attention to detail and premium quality exceeded our expectations. Our clients were genuinely impressed, which helped strengthen our business relationships."</p>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="testimonial-card h-full">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-bold">Priyanshi</h4>
                  <p class="text-gray-600 text-sm">Marketing Director, Elevate Brands</p>
                </div>
              </div>
              <p class="text-gray-700 mb-4">"We've been working with GiftCraft for our holiday gifting program for three years now, and they consistently deliver outstanding results. Their team understands our brand and always suggests creative, on-trend gift options that our employees look forward to each year."</p>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="testimonial-card h-full">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Wilson" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-bold">Dishank</h4>
                  <p class="text-gray-600 text-sm">Operations Manager, Global Logistics</p>
                </div>
              </div>
              <p class="text-gray-700 mb-4">"The employee appreciation gifts we ordered were a huge hit! The customization options allowed us to add a personal touch to each gift, and the quality was exceptional. The entire process was seamless, from selection to delivery."</p>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>

  <!-- Partners Section -->
  <section id="partners" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="section-title centered text-center mx-auto" data-aos="fade-up">Our Trusted Partners</h2>
      <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">We collaborate with premium brands to deliver exceptional gifting experiences.</p>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" class="partner-logo h-12">
        </div>
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" class="partner-logo h-12">
        </div>
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" class="partner-logo h-8">
        </div>
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="400">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" class="partner-logo h-8">
        </div>
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="500">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" class="partner-logo h-8">
        </div>
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="600">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" class="partner-logo h-8">
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div data-aos="fade-right">
          <h2 class="section-title">Get in Touch</h2>
          <p class="text-gray-600 mb-8">Ready to elevate your corporate gifting experience? Contact us to discuss your requirements and discover how we can help you create meaningful connections through thoughtful gifts.</p>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="text-primary text-xl mt-1"><i class="fas fa-map-marker-alt"></i></div>
              <div>
                <h4 class="font-bold text-lg">Our Location</h4>
                <p class="text-gray-600">203,Tower B Balaji Foster Height,Crossing Republic,Ghaziabad, 201016</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="text-primary text-xl mt-1"><i class="fas fa-envelope"></i></div>
              <div>
                <h4 class="font-bold text-lg">Email Us</h4>
                <p class="text-gray-600">anshuls180@gmail.com</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="text-primary text-xl mt-1"><i class="fas fa-phone-alt"></i></div>
              <div>
                <h4 class="font-bold text-lg">Call Us</h4>
                <p class="text-gray-600">+91-8130885248</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="text-primary text-xl mt-1"><i class="fas fa-clock"></i></div>
              <div>
                <h4 class="font-bold text-lg">Business Hours</h4>
                <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h4 class="font-bold text-lg mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left">
          <form class="bg-white p-8 rounded-xl shadow-lg">
            <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                <input type="text" id="name" class="contact-input" placeholder="John Doe">
              </div>
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Your Email</label>
                <input type="email" id="email" class="contact-input" placeholder="john@example.com">
              </div>
            </div>
            
            <div class="mb-6">
              <label for="company" class="block text-gray-700 font-medium mb-2">Company Name</label>
              <input type="text" id="company" class="contact-input" placeholder="Your Company">
            </div>
            
            <div class="mb-6">
              <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
              <input type="text" id="subject" class="contact-input" placeholder="How can we help you?">
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
              <textarea id="message" rows="4" class="contact-input" placeholder="Tell us about your requirements..."></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-dark text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold font-display mb-4">Cherished<span class="text-primary">Connect</span></h3>
          <p class="text-gray-400 mb-6">Elevating corporate relationships through thoughtful, premium gifting experiences.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#categories" class="text-gray-400 hover:text-white transition-colors">Gift Collections</a></li>
            <li><a href="#gallery" class="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-4">Gift Categories</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Onboarding Kits</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Appreciation Gifts</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Festive Gifts</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Executive Gifts</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Customized Gifts</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Event Gifts</a></li>
          </ul>
        </div>
        
        <div>
         
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 CherisConnect. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;