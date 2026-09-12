import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import Loading from './components/Loading';
import type { Technology } from './types';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTimeout(() => {
          setTechnologies(data);
          setLoading(false);
        }, 600);
      })
      .catch(() => {
        toast.error('Failed to load technologies');
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech: Technology): void => {
    const exists = stack.find((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string): void => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = (): void => {
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  const isAdded = (id: string): boolean => stack.some((item) => item.id === id);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold">
            Explore the{' '}
            <span className="gradient-brand-text">Technologies</span>
          </h2>
          <p className="mt-2 text-base-content/60">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAdd}
                    isAdded={isAdded(tech.id)}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </section>

      <Footer />
      <ToastContainer
  position="bottom-right"
  autoClose={2500}
  aria-label="Notifications"
/>
    </div>
  );
}