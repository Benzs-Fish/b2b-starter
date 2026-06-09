import InteractiveLink from "@/modules/common/components/interactive-link"
import { Heading, Text } from "@medusajs/ui"

const EmptyCartMessage = () => {
  return (
    <div
      className="py-48 px-2 flex flex-col justify-center items-start"
      data-testid="empty-cart-message"
    >
      <Heading
        level="h1"
        className="font-serif text-4xl small:text-5xl text-benzs-ink gap-x-2 items-baseline"
      >
        Your cart is empty.
      </Heading>
      <Text className="text-base-regular text-benzs-ink/70 mt-4 mb-6 max-w-[32rem]">
        Nothing here yet. Browse our full line of kosher fish and groceries to
        get started.
      </Text>
      <div>
        <InteractiveLink href="/store">Explore products</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
