import Abstract from '@/components/Abstract';
import Aside_Nav from '@/components/Aside_Nav';
import PhotosCard from '@/components/PhotosCard';
import SessionsSection from '@/components/SessionsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Aside_Nav />
      <div className="pt-14 xl:pt-0  flex-1 min-w-0 overflow-x-hidden ">
        <Abstract />
        <PhotosCard />
        <SessionsSection />
        <Footer />
      </div>
    </main>
  );
}
