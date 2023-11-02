import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import styled from "styled-components";
import {
  Image,
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  //
  Container,
  //
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import slide1 from "../assets/images/main/silide1.jpg";
import tablenft from "../assets/images/table/nft-img1.png";

const Home = () => {
  return (
    <Layout title="Home" pagename="home">
      <SwiperStyled
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperItem></SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide1" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide2" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>

        <SwiperItem>
          <Image src={slide1} alt="introsilide3" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>

        <SwiperItem>
          <Image src={slide1} alt="introsilide4" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide5" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide6" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide7" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide8" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide9" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
        <SwiperItem>
          <Image src={slide1} alt="introsilide10" />
          <SwiperBox>
            <Heading as={"h2"}>Title</Heading>
            <Text as="strong" variant={"txt164"}>
              슬라이드 내용
            </Text>
          </SwiperBox>
        </SwiperItem>
      </SwiperStyled>
      <Container>
        <TabsStyle variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>NFT 랭킹</Tab>
            <Tab>컬렉션 랭킹</Tab>
            <Tab>TOP 컬렉터</Tab>
          </TabList>
          <TabPanels>
            <TabboxStyle>
              <TableCont>
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>제목</Th>
                      <Th isNumeric>최저 판매가</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableCont>
              <TableCont>
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>제목</Th>
                      <Th isNumeric>최저 판매가</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>

                    <Tr>
                      <TdimgStyle>
                        <TableimgBox>
                          <Image src={tablenft} alt="tableimg1" />
                        </TableimgBox>
                        <div>
                          <div>
                            1 <span>icon</span>
                          </div>
                          Bellygom World Official 2.0
                        </div>
                      </TdimgStyle>
                      <Td isNumeric>
                        <p>0.051 ETH</p>
                        <p>
                          <span>icon</span>125,499 KRW
                        </p>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableCont>
            </TabboxStyle>

            <TabPanel>
              <p>2!</p>
            </TabPanel>
            <TabPanel>
              <p>3!</p>
            </TabPanel>
          </TabPanels>
        </TabsStyle>
      </Container>
    </Layout>
  );
};

// const 변수이름(첫자는대문자) = styled.일반태그명``;
// const 변수이름(첫자는대문자) = styled(컴포넌트명)``;

const TabsStyle = styled(Tabs)`
  background: transparent;
`;
const TabboxStyle = styled(TabPanel)`
  display: flex;
  justify-content: space-between;
`;
//
const TableCont = styled(TableContainer)`
  width: 50%;
`;
const TableimgBox = styled.div`
  overflow: hidden;
  border-radius: 4px;
  width: 48px;
  height: 48px;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
`;
const TdimgStyle = styled(Td)`
  display: flex;
  width: 100%;
  height: 100%;
`;
//
const SwiperStyled = styled(Swiper)`
  width: 100%;
`;
const SwiperItem = styled(SwiperSlide)`
  position: relative;
`;
//
const SwiperBox = styled(Box)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
// styled-components import 후 사용
// const 변수이름(첫자는대문자) = styled.태그명`css기입`;

export default Home;
