import { extendTheme, ChakraProvider, Box, Text, Button, Container, VStack, Heading } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

// Define the color palette
const theme = extendTheme({
  colors: {
    primary: {
      500: "#01151E",
      700: "#010F16",
      300: "#011827",
    },
    secondary: {
      500: "#EEBB7D",
      300: "#F3D2A2",
      100: "#F8E4C8",
    },
    complementary: {
      teal: "#014955",
      grey: "#9B958D",
      coral: "#FF7865",
    },
    accent: {
      slate: "#2B303A",
      cream: "#FFF5E1",
    },
  },
  styles: {
    global: {
      body: {
        bg: "primary.500",
        color: "accent.cream",
      },
    },
  },
  components: {
    Button: {
      variants: {
        neomorphic: {
          bg: "secondary.500",
          color: "primary.700",
          boxShadow: "5px 5px 15px #010F16, -5px -5px 15px #011827",
          _hover: {
            boxShadow: "inset 5px 5px 15px #010F16, inset -5px -5px 15px #011827",
          },
        },
      },
    },
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <VStack spacing={10} py={20} textAlign="center">
          <Heading as="h1" size="2xl" color="accent.cream">
            Welcome to TradeMaster
          </Heading>
          <Text fontSize="xl" color="accent.slate">
            Your ultimate platform for real-time trading and analytics.
          </Text>
          <Box p={8} bg="primary.300" borderRadius="lg" boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)">
            <Text fontSize="lg" color="accent.cream">
              Join our community of traders and gain the edge you need to succeed in the markets.
            </Text>
            <Button rightIcon={<FaChartLine />} mt={4} variant="neomorphic">
              Get Started
            </Button>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
