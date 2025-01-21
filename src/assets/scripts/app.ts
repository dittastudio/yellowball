import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

import FnFauxGraph from '@/components/UI/FauxGraph';
import FnCardEffect from '@/components/Card/CardEffect'
import FnItem from '@/components/Accordion/Item.ts'
import FnBackground from '@/components/App/Header/Background.ts'
import FnIndex from '@/components/App/Header/Index.ts'
import FnLogo from '@/components/App/Header/Logo.ts'
import FnNavigation from '@/components/App/Header/Navigation.ts'
import FnNavigationList from '@/components/App/Header/NavigationList.ts'
import FnFooter from '@/components/App/Footer.ts'
import FnFAQs from '@/components/Block/FAQs.ts'
import FnGoogle from '@/components/Block/Google.ts'
import FnHeadingBanner from '@/components/Block/HeadingBanner.ts'
import FnHero from '@/components/Block/Hero.ts'
import FnOverlaps from '@/components/Block/Overlaps.ts'
import FnServiceList from '@/components/Block/ServiceList.ts'
import FnSplitRichText from '@/components/Block/SplitRichText.ts'
import FnAvatars from '@/components/Card/Avatars.ts'
import FnCaseStudyHero from '@/components/Card/CaseStudyHero.ts'
import FnFigure from '@/components/Card/Figure.ts'
import FnPostHero from '@/components/Card/PostHero.ts'
import FnProjectHero from '@/components/Card/ProjectHero.ts'
import FnPrompt from '@/components/Card/Prompt.ts'
import FnService from '@/components/Card/Service.ts'
import FnIconText from '@/components/Carousel/IconText.ts'
import FnPost from '@/components/Carousel/Post.ts'
import FnProfile from '@/components/Carousel/Profile.ts'
import FnProject from '@/components/Carousel/Project.ts'
import FnTestimonials from '@/components/Carousel/Testimonials.ts'
import FnCursors from '@/components/Elements/Cursors.ts'
import FnNumberedText from '@/components/Elements/NumberedText.ts'
import FnTextReveal from '@/components/Elements/TextReveal.ts'
import FnTicker from '@/components/Elements/Ticker.ts'
import FnFile from '@/components/Fields/File.ts'
import FnContact from '@/components/Form/Contact.ts'
import FnButtonScrollToTop from '@/components/UI/ButtonScrollToTop.ts'
import FnModal from '@/components/UI/Modal.ts'
import FnTypingText from '@/components/UI/TypingText.ts'

gsap.registerPlugin(ScrollTrigger)

new Lenis({
  autoRaf: true,
});

FnFauxGraph()
FnCardEffect()
FnItem()
FnBackground()
FnIndex()
FnLogo()
FnNavigation()
FnNavigationList()
FnFooter()
FnFAQs()
FnGoogle()
FnHeadingBanner()
FnHero()
FnOverlaps()
FnServiceList()
FnSplitRichText()
FnAvatars()
FnCaseStudyHero()
FnFigure()
FnPostHero()
FnProjectHero()
FnPrompt()
FnService()
FnIconText()
FnPost()
FnProfile()
FnProject()
FnTestimonials()
FnCursors()
FnNumberedText()
FnTextReveal()
FnTicker()
FnFile()
FnContact()
FnButtonScrollToTop()
FnModal()
FnTypingText()