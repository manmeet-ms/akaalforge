import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import LandingFooter from '../components/Footer/LandingFooter'
import LandingHeader from '../components/Header/LandingHeader'
import CommunityBlock from "../components/CommunityBlock";

export const Route = createFileRoute('/community')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  
  
  <LandingHeader/>
  <div id="community">
  <CommunityBlock/>
  </div>
 

  <LandingFooter/>
  </>)
}
