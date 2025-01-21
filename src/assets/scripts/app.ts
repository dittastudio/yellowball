import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

import FnAvatars from '@/components/Card/Avatars.ts'
import FnBackground from '@/components/App/Header/Background.ts'
import FnButtonScrollToTop from '@/components/UI/ButtonScrollToTop.ts'
import FnCardBackgroundGradientHoverEffect from '@/components/Card/CardBackgroundGradientHoverEffect.ts'
import FnContact from '@/components/Form/Contact.ts'
import FnCursors from '@/components/Elements/Cursors.ts'
import FnFAQs from '@/components/Block/FAQs.ts'
import FnFigure from '@/components/Card/Figure.ts'
import FnFile from '@/components/Fields/File.ts'
import FnFooter from '@/components/App/Footer.ts'
import FnGoogle from '@/components/Block/Google.ts'
import FnHeadingBanner from '@/components/Block/HeadingBanner.ts'
import FnHero from '@/components/Block/Hero.ts'
import FnIconText from '@/components/Carousel/IconText.ts'
import FnIndex from '@/components/App/Header/Index.ts'
import FnItem from '@/components/Accordion/Item.ts'
import FnLogo from '@/components/App/Header/Logo.ts'
import FnModal from '@/components/UI/Modal.ts'
import FnNavigation from '@/components/App/Header/Navigation.ts'
import FnNavigationList from '@/components/App/Header/NavigationList.ts'
import FnNumberedText from '@/components/Elements/NumberedText.ts'
import FnOverlaps from '@/components/Block/Overlaps.ts'
import FnPost from '@/components/Carousel/Post.ts'
import FnPostHero from '@/components/Card/PostHero.ts'
import FnProfile from '@/components/Carousel/Profile.ts'
import FnProject from '@/components/Carousel/Project.ts'
import FnPrompt from '@/components/Card/Prompt.ts'
import FnService from '@/components/Card/Service.ts'
import FnServiceHero from '@/components/Card/ServiceHero.ts'
import FnServiceList from '@/components/Block/ServiceList.ts'
import FnSplitRichText from '@/components/Block/SplitRichText.ts'
import FnTestimonials from '@/components/Carousel/Testimonials.ts'
import FnTextReveal from '@/components/Elements/TextReveal.ts'
import FnTicker from '@/components/Elements/Ticker.ts'
import FnTypingText from '@/components/UI/TypingText.ts'

gsap.registerPlugin(ScrollTrigger)

new Lenis({
  autoRaf: true,
});

FnAvatars()
FnBackground()
FnButtonScrollToTop()
FnCardBackgroundGradientHoverEffect()
FnContact()
FnCursors()
FnFAQs()
FnFigure()
FnFile()
FnFooter()
FnGoogle()
FnHeadingBanner()
FnHero()
FnIconText()
FnIndex()
FnItem()
FnLogo()
FnModal()
FnNavigation()
FnNavigationList()
FnNumberedText()
FnOverlaps()
FnPost()
FnPostHero()
FnProfile()
FnProject()
FnPrompt()
FnService()
FnServiceHero()
FnServiceList()
FnSplitRichText()
FnTestimonials()
FnTextReveal()
FnTicker()
FnTypingText()