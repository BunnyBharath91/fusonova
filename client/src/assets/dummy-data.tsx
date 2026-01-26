import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Image Fusion',
        desc: 'Upload a product image and a model image. Our AI uses Google Gemini to generate realistic composite visuals.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'AI-Powered Generation',
        desc: 'Leverage Google Gemini AI for image fusion and Google Veo for video generation with professional quality.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Conversion',
        desc: 'Transform generated images into short-form videos (5+ seconds) optimized for social media and marketing.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard quality',
            'No watermark',
            'Slower generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'For small teams and agencies.',
        credits: 80,
        features: [
            '80 Credits', 
            'HD quality', 
            'No watermark', 
            'Video generation', 
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies.',
        credits: 300,
        features: [
            '300 Credits', 
            'FHD quality', 
            'No watermark', 
            'Fast generation speed', 
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does Fusonova work?',
        answer: 'Fusonova uses Google Gemini AI to fuse your product image with a model image, creating realistic composite visuals. You can then convert the generated image into a short-form video using Google Veo. Simply upload both images, configure your settings, and generate.'
    },
    {
        question: 'Do I own the generated images and videos?',
        answer: 'Yes — you receive full commercial rights to any images and videos generated on the platform. Use them for e-commerce listings, marketing materials, social media, and more.'
    },
    {
        question: 'How does the credit system work?',
        answer: 'Fusonova uses a pay-as-you-go credit system. Image generation costs 5 credits, and video generation costs 10 credits. New users receive 20 credits to get started.'
    },
    {
        question: 'What image formats are supported?',
        answer: 'We accept JPG, PNG, and WEBP formats for uploads. Generated outputs are high-resolution images and MP4 videos optimized for various platforms and aspect ratios (9:16 vertical or 16:9 horizontal).'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];