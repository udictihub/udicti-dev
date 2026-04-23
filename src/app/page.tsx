import Abstract from '@/components/Abstract';
import HeaderBar from '@/components/HeaderBar';
import Aside_Nav from '@/components/Aside_Nav';
import PhotosCard from '@/components/PhotosCard';
import SessionsSection from '@/components/SessionsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Aside_Nav />
      <div className="pt-16 lg:pt-0 w-full max-w-[100vw] overflow-x-hidden">
        <Abstract />
        <SessionsSection />
        <PhotosCard />
        <Footer />
      </div>
    </main>
  );
}
