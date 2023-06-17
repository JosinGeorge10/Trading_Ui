import React, { useState } from "react";
import styled from "styled-components";
import image from "../../Assets/Images/icons.svg";


function Demo() {
  const [show, setShow] = useState(false);
  return (
    <GridMain>
      <MarketList>
        <BoxContainer>
          <Box1>
            <IconContainer>
              <Image1>
                <IconImage1></IconImage1>
              </Image1>
              <Button>BUY</Button>
              <Button>Trade</Button>
            </IconContainer>
            <SubHeading>Bitcoin</SubHeading>
            <NumberContainer>
              <NumberLeft>$48,789.50</NumberLeft>
              <NumberRight>
                -58%
                <LogoImage>
                  <Arrow></Arrow>
                </LogoImage>
              </NumberRight>
            </NumberContainer>
          </Box1>
          <Box2>
            <LightContainer>
              <Image2>
                <IconImage2></IconImage2>
              </Image2>
              <Button>BUY</Button>
              <Button>Trade</Button>
            </LightContainer>
            <SubHeading>Ethereum</SubHeading>
            <NumberContainer>
              <NumberLeft>$48,789</NumberLeft>
              <NumberRight>
                +0.58%
                <LogoImage>
                  <Arrow></Arrow>
                </LogoImage>
              </NumberRight>
            </NumberContainer>
          </Box2>
          <Box3>
            <DarkContainer>
              <Image3>
                <IconImage2></IconImage2>
              </Image3>
              <Button>BUY</Button>
              <Button>Trade</Button>
            </DarkContainer>
            <SubHeading>Steller</SubHeading>
            <NumberContainer>
              <NumberLeft>$489.50</NumberLeft>
              <NumberRight>
                -58%
                <LogoImage>
                  <Arrow></Arrow>
                </LogoImage>
              </NumberRight>
            </NumberContainer>
          </Box3>
          <Box4>
            <GreyContainer>
              <Image4>
                <IconImage2></IconImage2>
              </Image4>
              <Button>BUY</Button>
              <Button>Trade</Button>
            </GreyContainer>
            <SubHeading>Solana</SubHeading>
            <NumberContainer>
              <NumberLeft>$489.50</NumberLeft>
              <NumberRight>
                -0.88%
                <LogoImage>
                  <Arrow></Arrow>
                </LogoImage>
              </NumberRight>
            </NumberContainer>
          </Box4>
        </BoxContainer>
      </MarketList>
      <SectionGraph>
        <Price>
          <MiddleContainer>

          </MiddleContainer>
        </Price>
        <MarketStatus>
          <RightbarContainer>
            <ListContainer>
              <Left>Market Status</Left>
              {show ? (
                <ViewButton onClick={() => setShow(false)}>
                  View less
                </ViewButton>
              ) : (
                <ViewButton onClick={() => setShow(true)}>View all</ViewButton>
              )}
            </ListContainer>
            {show ? (
              <>
                {" "}
                <TextContainer>
                  <NoteContainer1>
                    <Icon1></Icon1>
                  </NoteContainer1>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>
                <TextContainer>
                  <NoteContainer2>
                    <Icon2></Icon2>
                  </NoteContainer2>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>
                <TextContainer>
                  <NoteContainer3>
                    <Icon3></Icon3>
                  </NoteContainer3>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>
                <TextContainer>
                  <NoteContainer3>
                    <Icon3></Icon3>
                  </NoteContainer3>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>
                <TextContainer>
                  <NoteContainer3>
                    <Icon3></Icon3>
                  </NoteContainer3>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>{" "}
              </>
            ) : (
              <>
                {" "}
                <TextContainer>
                  <NoteContainer1>
                    <Icon1></Icon1>
                  </NoteContainer1>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>
                <TextContainer>
                  <NoteContainer2>
                    <Icon2></Icon2>
                  </NoteContainer2>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>
                <TextContainer>
                  <NoteContainer3>
                    <Icon3></Icon3>
                  </NoteContainer3>
                  <TotalContainer>
                    <Text>Total Supply</Text>
                    <Number1>17.5M</Number1>
                  </TotalContainer>
                  <MaxContainer>
                    <Text>Max Supply</Text>
                    <DownContainer>
                      <Down></Down>
                      <Number>17.5%</Number>
                    </DownContainer>
                  </MaxContainer>
                </TextContainer>{" "}
              </>
            )}
          </RightbarContainer>
        </MarketStatus>
      </SectionGraph>
      <MarketingAnalysisConatiner>
        <PriceChange>
          
        </PriceChange>

        <Analytics>
          <BottomContainer>
            
          </BottomContainer>
        </Analytics>
      </MarketingAnalysisConatiner>
    </GridMain>
  );
}

const GridMain = styled.div`
  /* display: grid;
  grid-template-columns: 0.2fr 1fr 0.5fr;
  grid-template-rows: repeat(2, 0.5fr) repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 90vh;
  width: 100%; */
  width: 80%;
`;
const HeaderSec = styled.div`
  /* grid-area: 1 / 1 / 2 / 4; */
`;
const SideBar = styled.div`
  /* grid-area: 2 / 1 / 5 / 2; */
`;
const MarketList = styled.div`
  /* grid-area: 2 / 2 / 3 / 4; */
`;
const Price = styled.div`
  /* grid-area: 3 / 2 / 4 / 3; */
  width: 60%;
`;
const MarketStatus = styled.div`
  /* grid-area: 3 / 3 / 4 / 4;
  margin-bottom: 70px; */
  width: 38%;
  @media all and(max-width: 1380px){
    width:30px;
  }  
`;
const PriceChange = styled.div`
  /* grid-area: 4 / 2 / 5 / 3; */
  width: 59%;
`;
const Analytics = styled.div`
  /* grid-area: 4 / 3 / 5 / 4; */
  width: 38%;
`;
const SectionGraph = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MarketingAnalysisConatiner = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  display: flex;
  width: 95%;
  margin: 10px auto 0px;
  align-items: center;
  justify-content: space-between;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  /* width: 90%; */
  margin: 0 auto;
`;
const Box1 = styled.div`
  width: 17%;
  // height: 130px;
  background: #20b8fe;
  padding: 20px;
  // justify-content: space-between;
  border-radius: 24px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image1 = styled.div`
  border-radius: 50%;
  background: #4780ff;
  // width: 25px;
  // height: 26px;
  padding: 4px 6px;
  align-items: center;
`;
const IconImage1 = styled.small`
  background: url(${image});
  display: inline-block;
  width: 18px;
  height: 20px;
  background-position: -425px -22px;
`;
const Button = styled.button`
  color: #fff;
  background-color: #d9d9d9;
  border: none;
  font-weight: 700;
  border-radius: 6px;
  padding: 5px 7px;
`;
const SubHeading = styled.h3`
  color: #fff;
  margin: 2px;
  margin-left: 23px;
  font-size: 14px;
`;
const NumberContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-evenly;
`;
const NumberLeft = styled.h5`
  color: #fff;
  margin: 2px;
`;
const NumberRight = styled.h5`
  color: #fff;
  display: flex;
  margin: 2px;
`;
const LogoImage = styled.div``;
const Arrow = styled(IconImage1)`
  background-position: -474px -115px;
`;
const Box2 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #50247d, #aabbee);
  padding: 20px;
  // justify-content: space-between;
  border-radius: 24px;
`;
const LightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image2 = styled.div`
  border-radius: 50%;
  background: #8668a6;
  padding: 4px 6px;
  align-items: center;
`;
const IconImage2 = styled(IconImage1)`
  background-position: -425px -54px;
`;
const Box3 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #e56290, #ea856d);
  padding: 20px;
  justify-content: space-between;
  border-radius: 24px;
`;
const DarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image3 = styled.div`
  border-radius: 50%;
  background: #f0979c;
  padding: 4px 6px;
  align-items: center;
`;
const Box4 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #326e86, #6cb9b7);
  padding: 20px;
  justify-content: space-between;
  border-radius: 24px;
`;
const GreyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image4 = styled.div`
  border-radius: 50%;
  background: #6ca5b1;
  padding: 4px 6px;
  align-items: center;
`;

const RightbarContainer = styled.div`
  // position: absolute;
  right: 40px;
  margin-top: 9px;
  padding: 20px;
  /* height: 100%; */
  /* width: 90%; */
  background: #171c26;
  border-radius: 15px;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #55a55e;
  // padding-right: 8px;
`;
const Left = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  //  padding-right: 10px;
`;

const ViewButton = styled.button`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #171c26;
  font-size: 12px;
  padding: 3px 7px;
`;
const TextContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;
  padding-left: 15px;
`;
const NoteContainer1 = styled.div`
  background: linear-gradient(to right, #2579f1, #94befa);
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
  // margin: 5px;
`;
const Icon1 = styled.small`
  background: url(${image});
  display: block;
  width: 24px;
  height: 25px;
  background-position: -427px -196px;
  // background: linear-gradient(to right, #5531fa, #aabbee);
`;

const TotalContainer = styled.div`
  margin-right: 130px;
`;
const Text = styled.span`
  display: block;
  font-size: 12px;
  color: #262b36;
`;
const Number1 = styled.span`
  color: #fff;
  font-size: 13px;
`;
const MaxContainer = styled.div`
  justify-content: space-evenly;
`;
const DownContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Down = styled.small`
  background: url(${image});
  display: inline-block;
  width: 17px;
  height: 20px;
  background-position: -474px -22px;
  color: #206252;
`;
const Number = styled.span`
  color: #206252;
`;

const Icon2 = styled(Icon1)`
  width: 23px;
  height: 25px;
  background-position: -427px -257px;
`;
const Icon3 = styled(Icon1)`
  width: 25px;
  height: 28px;
  background-position: -427px -316px;
`;
const NoteContainer2 = styled.div`
  // background: linear-gradient(to right, #20b8fe, #aabbee);
  background: linear-gradient(to right, #b531a1, #7c40e2);
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
`;
const NoteContainer3 = styled.div`
  background: linear-gradient(to right, #c05036, #eb8440);
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
`;

const BottomContainer = styled.div`
  width: 95%;
  background: #171c26;
  border-radius: 10px;

  padding: 10px 5px;
`;

const RightContainer = styled.div``;
const Heading = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 20px;
`;
const ImageContainer = styled.div`
  /* width: 70%; */
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const MarketContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CopContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Word1 = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
const String1 = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const IconArrow1 = styled.small``;
const VolumeContainer = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const Word2 = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const IconArrow2 = styled.small``;
const String2 = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

const MiddleContainer = styled.div`
  margin-top: 9px;
  width: 95%;
  /* height: 240px; */
  padding: 20px;
  background: #171c26;
  border-radius: 15px;
`;

const SectionContainer = styled.span``;
const Title = styled.span`
  color: #fff;
`;
const SubTitle = styled.span`
  color: #fff;
  font-size: 12px;
`;
const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 314px;
  top: 11%;
  /* background: #20b8fe; */
  background: linear-gradient(to right, #015ce8, #20b8fe);
  padding: 3px 34px;
  @media all and(max-with: 1280px){
    left: 202px;
    top: 9%;
  }
`;
const Sub1 = styled.span`
  color: #fff;
`;
const Sub2 = styled.span`
  font-size: 12px;
  color: #fff;
  @media all and(max-with: 1280px){
    font-size: 11px;
  }
`;
const TagContainer = styled.button`
  height: 23px;
  display: block;
  background: #171c26;
  border-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 65px;
`;
const ButtonTag = styled.span`
  color: #fff;
  height: 23px;
  font-size: 8px;
  /* text-align: center;
  align-items: center; */
  margin-top: 10px;
`;
const Icon = styled(IconImage1)`
  background-position: -308px -175px;
`;
const ImageBarContainer = styled.div`
  width: 100%;
`;
const ImageBar = styled.img`
  width: 100%;
  height: 192px;
  display: block;
`;

const MainContainer = styled.div`
  background-color: #171c26;

  padding: 10px 20px;
  border-radius: 15px;
`;
const Caption = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
const PriceContainer = styled.div`
  margin-top: 15px;
  margin: 20px;
`;
const UsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #fff;
  height: 20px;
  margin-top: 10px;
  font-size: 13px;
`;
const ArrowMark = styled.small`
  background: url(${image});
  display: inline-block;
  width: 18px;
  height: 25px;
  background-position: -472px -19px;
`;
const ChangeContainer = styled.div`
  color: #fff;
`;
const ImageArrow = styled.small`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
`;
const ArrowTab = styled.small``;
const ArrowTag = styled.div`
   display: flex;
  justify-content: space-around;
  font-size: 13px;
`;
const TagImage = styled(ArrowMark)`
  width: 18px;
  height: 23px;
  background-position: -472px -115px;
`;
const UsContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  color: #51555e;
  margin-top: 10px;
  font-size: 13px;
`;
const ChangeContainer1 = styled.div``;
const ChangeContainer2 = styled.div``;
const ChangeContainer3 = styled.div``;
const ArrowIcon = styled.div``;
const ChangeContainer4 = styled.div``;
const ChangeContainer5 = styled.div``;
const Arrow1 = styled.div``;
const ArrowIcon1 = styled.div``;
const ImageArrow1 = styled.small`
  display: flex;
  justify-content: space-around;
`;
const ArrowMark1 = styled(ArrowMark)`
  width: 18px;
  height: 25px;
  background-position: -472px -19px;
`;
const UsContainer3 = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  height: 25px;
  color: #fff;
  background: linear-gradient(to right, #aabbee, #50247d);
  margin-top: 10px;
  font-size: 13px;
`;
const ArrowTag1 = styled.div`
   display: flex;
  justify-content: space-around;
`;
const TagImage1 = styled(ArrowMark)`
   width: 18px;
  height: 23px;
  background-position: -472px -115px;
 /* transform: rotate(-90deg); */
 transform: rotate(181deg);
`;

export default Demo;
