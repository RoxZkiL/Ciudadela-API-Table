import {
  Box,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Text,
  HStack,
  Stack,
  Container,
} from "@chakra-ui/react";

import { PieChart } from "react-minimal-pie-chart";

export default function Chart({ props }) {
  const isDangerous = props.map((element) => element.isDangerous)[0];
  const notDangerous = props.map((el) => el.nonDangerous)[0];

  return (
    <>
      <Stack alignItems={"center"} justifyContent={"start"} w={"inherit"}>
        <Stack mb={"15px"}>
          <Text
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize="xl"
            borderColor={"grey"}
            borderBottomWidth={{ base: "1px", md: "0px" }}
            mt={4}
          >
            Índice de Riesgo de Asteroides
          </Text>
        </Stack>
      </Stack>
      <Container>
        <Center
          textAlign={"center"}
          color={"white"}
          mb={"20px"}
          borderColor={"grey"}
          borderBottomWidth={{ base: "0px", md: "1px" }}
          borderTopWidth={{ base: "0px", md: "1px" }}
        >
          <Box
            display={{ md: "flex" }}
            m={"auto"}
            p={"5px"}
            h={{ md: "18vh" }}
            alignItems={"center"}
          >
            <Stack h={"inherit"}>
              <PieChart
                data={[
                  {
                    title: "complete",
                    value: isDangerous,
                    color: "#2a4365",
                  },
                  {
                    title: "incomplete",
                    value: notDangerous,
                    color: "#E53E3E",
                  },
                ]}
                lineWidth={50}
                viewBoxSize={[125, 100]}
                center={[63, 50]}
              />
            </Stack>
            <StatGroup mt={"20px"} ml={{ md: "25px" }}>
              <HStack>
                <Stat color={"#2a4365"}>
                  <StatLabel fontWeight={"bold"}>RIESGOSOS</StatLabel>
                  <StatNumber>{isDangerous}</StatNumber>
                </Stat>
                <Box h={"45px"} m={"auto"} w={"2px"} bg={"black"} />
                <Stat color={"#E53E3E"}>
                  <StatLabel fontWeight={"bold"}>INOFENSIVOS</StatLabel>
                  <StatNumber>{notDangerous}</StatNumber>
                </Stat>
              </HStack>
            </StatGroup>
            <Text
              mt={"10px"}
              ml={{ md: "50px" }}
              fontSize={"large"}
              color={"#E53E3E"}
              fontWeight={"bold"}
            >
              TOTAL:
              {isDangerous + notDangerous}
            </Text>
          </Box>
        </Center>
      </Container>
    </>
  );
}
