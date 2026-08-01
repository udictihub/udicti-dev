import Abstract from '@/components/Abstract';
import Aside_Nav from '@/components/Aside_Nav';
import PhotosCard from '@/components/PhotosCard';
import SessionsSection from '@/components/SessionsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen xl:grid xl:grid-cols-[10rem_minmax(0,1fr)] xl:gap-12 xl:items-start">
      <Aside_Nav />
      <div className="pt-16 xl:pt-0 w-full min-w-0 max-w-[100vw] overflow-x-hidden xl:col-start-2">
        <Abstract />
        <SessionsSection />
        <PhotosCard />
        <Footer />
      </div>
    </main>
  );
}
