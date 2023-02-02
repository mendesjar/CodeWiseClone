import React from "react";
import Image from "next/image";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import Logo from "../../public/assets/codewise-logo.6892cdb6.svg";

const NavBar = () => {
  return (
    <Box
      bg="transparent"
      px={5}
      py={2}
      className="fixed w-screen h-24 z-10 top-0 font-bold"
    >
      <Flex
        px={8}
        py={4}
        alignItems="center"
        bg="transparent"
        className="h-24 mx-20"
        justifyContent="space-between"
      >
        <Box className="flex items-center">
          <Box className="w-64">
            <Link href="#">
              <Image src={Logo} alt="Logomarca" className="h-10" />
            </Link>
          </Box>
          <Box className="w-72 flex justify-between">
            <Link href="#">
              <Button variant="ghost" mr={4}>
                Products
              </Button>
            </Link>
            <Link href="#">
              <Button variant="ghost" mr={4}>
                Careers
              </Button>
            </Link>
            <Link href="#">
              <Button variant="ghost">Contact us</Button>
            </Link>
          </Box>
        </Box>

        <Button className=" px-8 py-3 border-2 rounded-md border-black">See job offers</Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
