
import dynamic from "next/dynamic";


const DynamicHero = dynamic(() => import("@/app/pages/hero/Hero"),{
    ssr: false, loading: () => <p> Loading... </p>,});
const DynamicAbout = dynamic(() => import("@/app/pages/about/About"),{
    ssr: false, loading: () => <p> Loading... </p>,});
const DynamicExperience = dynamic(() => import("@/app/pages/experience/Experience"),{
    ssr: false, loading: () => <p> Loading... </p>,});
const DynamicProject = dynamic(() => import("@/app/pages/project/Project"),{
    ssr: false, loading: () => <p> Loading... </p>,});
const DynamicContact = dynamic(() => import("@/app/pages/contact/Contact"),{
    ssr: false, loading: () => <p> Loading... </p>,});
const DynamicSetupUpArrow = dynamic(() => import("@/app/pages/setupUpArrow/SetupUpArrow"),{
    ssr: false, loading: () => <p> Loading... </p>,});

export default function Home() {
  return (
    <main>
      <DynamicHero idName="hero"/>
      <DynamicAbout idName="about"/>
      <div className={`w-full h-[220px]`}/>
      <DynamicExperience idName="experience"/>
      <div className={`w-full h-[240px]`}/>
      <DynamicProject idName="project"/>
      <DynamicContact idName="contact"/>
      <DynamicSetupUpArrow/>
    </main>
  );
}
