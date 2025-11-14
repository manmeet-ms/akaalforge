import { Button } from "@/components/ui/button"
import { IconBrandDiscord } from "@tabler/icons-react"
const CommunityBlock = () => {
  return (
    
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col items-center gap-5">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg" alt="logo" className="size-10" />
            <h2 className="text-center text-3xl font-semibold">
              Join the conversation
              <br />
              <span className="text-muted-foreground/80">Discord community coming soon</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-md">
              We&apos;re building a space for makers, builders, and people who believe in creating tools that matter. No hype, no hustle culture—just honest discussions about building useful software.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href="#" className="flex items-center gap-2">
                  <IconBrandDiscord />
                  Coming Soon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    
    )
}

export default CommunityBlock