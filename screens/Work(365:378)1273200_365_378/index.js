import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_904_716}>
        <View style={styles.View_I904_716_547_576} />
        <View style={styles.View_I904_716_706_538}>
          <View style={styles.View_I904_716_705_523}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe5/50b3/737ca801c372abb65df39f4656ea7d16"
              }}
              style={styles.ImageBackground_I904_716_705_524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cac5/e1c8/0e2023540af6b642a72130a72ad7f390"
              }}
              style={styles.ImageBackground_I904_716_705_526}
            />
            <View style={styles.View_I904_716_705_528}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9558/7ae8/c4b1283bce91da3ad98df5b80c544b32"
                }}
                style={styles.ImageBackground_I904_716_705_529}
              />
            </View>
            <View style={styles.View_I904_716_705_533}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d2/7396/8c97eec650ab4b62f068e93ffc464ade"
                }}
                style={styles.ImageBackground_I904_716_705_534}
              />
            </View>
          </View>
          <View style={styles.View_I904_716_705_522}>
            <Text style={styles.Text_I904_716_705_522}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </Text>
          </View>
          <View style={styles.View_I904_716_706_577}>
            <Text style={styles.Text_I904_716_706_577}>
              We are always open to discuss your project and improve your online
              presence.
            </Text>
          </View>
          <View style={styles.View_I904_716_705_521}>
            <Text style={styles.Text_I904_716_705_521}>Lets Talk!</Text>
          </View>
        </View>
        <View style={styles.View_I904_716_706_539}>
          <View style={styles.View_I904_716_547_578} />
          <View style={styles.View_I904_716_547_604}>
            <Text style={styles.Text_I904_716_547_604}>
              Copyright 2021, Finsweet.com
            </Text>
          </View>
          <View style={styles.View_I904_716_547_583}>
            <Text style={styles.Text_I904_716_547_583}>Home</Text>
          </View>
          <View style={styles.View_I904_716_547_584}>
            <Text style={styles.Text_I904_716_547_584}>About us</Text>
          </View>
          <View style={styles.View_I904_716_547_585}>
            <Text style={styles.Text_I904_716_547_585}>Features</Text>
          </View>
          <View style={styles.View_I904_716_547_586}>
            <Text style={styles.Text_I904_716_547_586}>Pricing</Text>
          </View>
          <View style={styles.View_I904_716_547_587}>
            <Text style={styles.Text_I904_716_547_587}>FAQ</Text>
          </View>
          <View style={styles.View_I904_716_547_588}>
            <Text style={styles.Text_I904_716_547_588}>Blog</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9655/ba54/1eb775c43a1d382ac9df2f3a1db77a74"
          }}
          style={styles.ImageBackground_I904_716_547_589}
        />
        <View style={styles.View_I904_716_778_990}>
          <View style={styles.View_I904_716_706_578} />
          <View style={styles.View_I904_716_706_579}>
            <View style={styles.View_I904_716_706_581}>
              <Text style={styles.Text_I904_716_706_581}>
                contact@website.com
              </Text>
            </View>
            <View style={styles.View_I904_716_706_582}>
              <Text style={styles.Text_I904_716_706_582}>Email me at</Text>
            </View>
            <View style={styles.View_I904_716_706_584}>
              <Text style={styles.Text_I904_716_706_584}>0927 6277 28525</Text>
            </View>
            <View style={styles.View_I904_716_706_585}>
              <Text style={styles.Text_I904_716_706_585}>Call us</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_715_691}>
        <View style={styles.View_715_690}>
          <View style={styles.View_715_685}>
            <View style={styles.View_715_686}>
              <Text style={styles.Text_715_686}>Contact Us</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_715_687}>
          <View style={styles.View_715_688}>
            <Text style={styles.Text_715_688}>
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
              ultricies nec dolor sit amet, scelerisque cursus purus.
            </Text>
          </View>
          <View style={styles.View_715_689}>
            <Text style={styles.Text_715_689}>
              Let&#39;s build something great together
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_779_525}>
        <View style={styles.View_715_564}>
          <View style={styles.View_714_517}>
            <View style={styles.View_714_511}>
              <View style={styles.View_714_512} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e624/b440/793e3f33aaa27ab4888f43a02a2f63be"
                }}
                style={styles.ImageBackground_714_513}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0394/7b5c/e132216029cf662ba38b61518f0def34"
                }}
                style={styles.ImageBackground_759_528}
              />
            </View>
            <View style={styles.View_801_518}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d28/455e/8dbb3786e3cbf697a871db208141f9bf"
                }}
                style={styles.ImageBackground_801_519}
              />
            </View>
          </View>
          <View style={styles.View_715_563}>
            <View style={styles.View_714_514}>
              <Text style={styles.Text_714_514}>Template 1</Text>
            </View>
            <View style={styles.View_714_516}>
              <Text style={styles.Text_714_516}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </Text>
            </View>
            <View style={styles.View_715_562}>
              <View style={styles.View_715_560}>
                <Text style={styles.Text_715_560}>View Portfolio</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3814/ad22/4599afa67c9beca14d85b57f4b91726f"
                }}
                style={styles.ImageBackground_715_561}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_801_534}>
          <View style={styles.View_801_535}>
            <View style={styles.View_801_536}>
              <View style={styles.View_801_537} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e624/b440/793e3f33aaa27ab4888f43a02a2f63be"
                }}
                style={styles.ImageBackground_801_538}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0394/7b5c/e132216029cf662ba38b61518f0def34"
                }}
                style={styles.ImageBackground_801_539}
              />
            </View>
            <View style={styles.View_801_540}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c0/df41/448155e22b3fa168e0deadd4a1d1ff50"
                }}
                style={styles.ImageBackground_801_541}
              />
            </View>
          </View>
          <View style={styles.View_801_542}>
            <View style={styles.View_801_543}>
              <Text style={styles.Text_801_543}>Template 3</Text>
            </View>
            <View style={styles.View_801_544}>
              <Text style={styles.Text_801_544}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </Text>
            </View>
            <View style={styles.View_1101_502}>
              <View style={styles.View_1101_503}>
                <Text style={styles.Text_1101_503}>Read case study</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3814/ad22/4599afa67c9beca14d85b57f4b91726f"
                }}
                style={styles.ImageBackground_1101_504}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_801_562}>
          <View style={styles.View_801_563}>
            <View style={styles.View_801_564}>
              <View style={styles.View_801_565} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e624/b440/793e3f33aaa27ab4888f43a02a2f63be"
                }}
                style={styles.ImageBackground_801_566}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0394/7b5c/e132216029cf662ba38b61518f0def34"
                }}
                style={styles.ImageBackground_801_567}
              />
            </View>
            <View style={styles.View_801_568}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7132/27c0/50f6b7ee141a9e973dac1c0c6e6abc86"
                }}
                style={styles.ImageBackground_801_569}
              />
            </View>
          </View>
          <View style={styles.View_801_570}>
            <View style={styles.View_801_571}>
              <Text style={styles.Text_801_571}>Template 5</Text>
            </View>
            <View style={styles.View_801_572}>
              <Text style={styles.Text_801_572}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </Text>
            </View>
            <View style={styles.View_1101_508}>
              <View style={styles.View_1101_509}>
                <Text style={styles.Text_1101_509}>Read case study</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3814/ad22/4599afa67c9beca14d85b57f4b91726f"
                }}
                style={styles.ImageBackground_1101_510}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_801_520}>
          <View style={styles.View_801_521}>
            <View style={styles.View_801_522}>
              <View style={styles.View_801_523} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e624/b440/793e3f33aaa27ab4888f43a02a2f63be"
                }}
                style={styles.ImageBackground_801_524}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0394/7b5c/e132216029cf662ba38b61518f0def34"
                }}
                style={styles.ImageBackground_801_525}
              />
            </View>
            <View style={styles.View_801_526}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a3e/41e2/f1f34183de6347d3ac19e6c2bda17c59"
                }}
                style={styles.ImageBackground_801_527}
              />
            </View>
          </View>
          <View style={styles.View_801_528}>
            <View style={styles.View_801_529}>
              <Text style={styles.Text_801_529}>Template 2</Text>
            </View>
            <View style={styles.View_801_530}>
              <Text style={styles.Text_801_530}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </Text>
            </View>
            <View style={styles.View_1101_499}>
              <View style={styles.View_1101_500}>
                <Text style={styles.Text_1101_500}>View Portfolio</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3814/ad22/4599afa67c9beca14d85b57f4b91726f"
                }}
                style={styles.ImageBackground_1101_501}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_801_548}>
          <View style={styles.View_801_549}>
            <View style={styles.View_801_550}>
              <View style={styles.View_801_551} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e624/b440/793e3f33aaa27ab4888f43a02a2f63be"
                }}
                style={styles.ImageBackground_801_552}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0394/7b5c/e132216029cf662ba38b61518f0def34"
                }}
                style={styles.ImageBackground_801_553}
              />
            </View>
            <View style={styles.View_801_554}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f6/a393/f337eb6a8b26229160a207012372c669"
                }}
                style={styles.ImageBackground_801_555}
              />
            </View>
          </View>
          <View style={styles.View_801_556}>
            <View style={styles.View_801_557}>
              <Text style={styles.Text_801_557}>Template 4</Text>
            </View>
            <View style={styles.View_801_558}>
              <Text style={styles.Text_801_558}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </Text>
            </View>
            <View style={styles.View_1101_505}>
              <View style={styles.View_1101_506}>
                <Text style={styles.Text_1101_506}>Read case study</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3814/ad22/4599afa67c9beca14d85b57f4b91726f"
                }}
                style={styles.ImageBackground_1101_507}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_801_576}>
          <View style={styles.View_801_577}>
            <View style={styles.View_801_578}>
              <View style={styles.View_801_579} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e624/b440/793e3f33aaa27ab4888f43a02a2f63be"
                }}
                style={styles.ImageBackground_801_580}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0394/7b5c/e132216029cf662ba38b61518f0def34"
                }}
                style={styles.ImageBackground_801_581}
              />
            </View>
            <View style={styles.View_801_582}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4b7/8f45/5964e734c650c42ea83f30d8b5bc01c3"
                }}
                style={styles.ImageBackground_801_583}
              />
            </View>
          </View>
          <View style={styles.View_801_584}>
            <View style={styles.View_801_585}>
              <Text style={styles.Text_801_585}>Template 6</Text>
            </View>
            <View style={styles.View_801_586}>
              <Text style={styles.Text_801_586}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </Text>
            </View>
            <View style={styles.View_1101_511}>
              <View style={styles.View_1101_512}>
                <Text style={styles.Text_1101_512}>Read case study</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3814/ad22/4599afa67c9beca14d85b57f4b91726f"
                }}
                style={styles.ImageBackground_1101_513}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_714_496}>
          <View style={styles.View_714_489}>
            <Text style={styles.Text_714_489}>All</Text>
          </View>
          <View style={styles.View_714_493}>
            <Text style={styles.Text_714_493}>UI Design</Text>
          </View>
          <View style={styles.View_714_494}>
            <Text style={styles.Text_714_494}>Webflow Design</Text>
          </View>
          <View style={styles.View_714_495}>
            <Text style={styles.Text_714_495}>Figma Design</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_779_524}>
        <View style={styles.View_714_488} />
        <View style={styles.View_773_552}>
          <View style={styles.View_366_296}>
            <View style={styles.View_365_415}>
              <View style={styles.View_714_465}>
                <View style={styles.View_365_417}>
                  <Text style={styles.Text_365_417}>Our Work Portfolio</Text>
                </View>
                <View style={styles.View_365_418}>
                  <Text style={styles.Text_365_418}>
                    We help teams create great digital products by providing
                    them with tools and technology to make the design-to-code
                    process universally accessible.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_714_479}>
            <Text style={styles.Text_714_479}>What we created</Text>
          </View>
          <View style={styles.View_714_466}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/776f/3629/d21135004b7d910045da29e20b82a891"
              }}
              style={styles.ImageBackground_714_467}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58ca/9108/26d10678f97cbc175405737f56409849"
              }}
              style={styles.ImageBackground_714_469}
            />
            <View style={styles.View_714_471}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/948a/10e5/7b6bd5fbc624e33fb466569acee632ba"
                }}
                style={styles.ImageBackground_714_472}
              />
            </View>
            <View style={styles.View_714_476}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a09d/fb12/be797cad03a2f19488ede9215658502c"
                }}
                style={styles.ImageBackground_714_477}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_715_898}>
        <View style={styles.View_I715_898_706_931} />
        <View style={styles.View_I715_898_706_932}>
          <View style={styles.View_I715_898_706_933} />
          <View style={styles.View_I715_898_706_934}>
            <Text style={styles.Text_I715_898_706_934}>Contact us</Text>
          </View>
        </View>
        <View style={styles.View_I715_898_706_935}>
          <Text style={styles.Text_I715_898_706_935}>Home</Text>
        </View>
        <View style={styles.View_I715_898_706_937}>
          <Text style={styles.Text_I715_898_706_937}>About us</Text>
        </View>
        <View style={styles.View_I715_898_706_938}>
          <Text style={styles.Text_I715_898_706_938}>Features</Text>
        </View>
        <View style={styles.View_I715_898_706_939}>
          <Text style={styles.Text_I715_898_706_939}>Pricing</Text>
        </View>
        <View style={styles.View_I715_898_706_940}>
          <Text style={styles.Text_I715_898_706_940}>FAQ</Text>
        </View>
        <View style={styles.View_I715_898_706_941}>
          <Text style={styles.Text_I715_898_706_941}>Blog</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ef/4a3c/3e7356eb798de2cf0baef6eb6e83db47"
          }}
          style={styles.ImageBackground_I715_898_1117_483}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("492%") },
  View_904_716: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("425%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I904_716_547_576: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_I904_716_706_538: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%")
  },
  View_I904_716_705_523: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_I904_716_705_524: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I904_716_705_526: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I904_716_705_528: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I904_716_705_529: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_716_705_533: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I904_716_705_534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_716_705_522: {
    width: wp("25%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_705_522: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_706_577: {
    width: wp("25%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_706_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_705_521: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_705_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_706_539: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%")
  },
  View_I904_716_547_578: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I904_716_547_604: {
    width: wp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_604: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_547_583: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_583: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_547_584: {
    width: wp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_547_585: {
    width: wp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_547_586: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_586: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_547_587: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_587: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_547_588: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_547_588: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I904_716_547_589: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%")
  },
  View_I904_716_778_990: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("41%")
  },
  View_I904_716_706_578: {
    width: wp("32%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_I904_716_706_579: {
    width: wp("21%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I904_716_706_581: {
    width: wp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_706_581: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_706_582: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_706_582: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_706_584: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_706_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_716_706_585: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_716_706_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_715_691: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("365%")
  },
  View_715_690: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("33%")
  },
  View_715_685: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_715_686: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_715_686: {
    color: "rgba(27, 28, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_715_687: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_715_688: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_715_688: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_715_689: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_715_689: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_779_525: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("265%"),
    minHeight: hp("265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("83%")
  },
  View_715_564: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_714_517: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_714_511: {
    width: wp("39%"),
    height: hp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_714_512: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 220, 255, 1)"
  },
  ImageBackground_714_513: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_759_528: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_801_518: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_801_519: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_715_563: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_714_514: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_714_514: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_714_516: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_714_516: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_715_562: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_715_560: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_715_560: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_715_561: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_801_534: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%")
  },
  View_801_535: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_801_536: {
    width: wp("39%"),
    height: hp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_801_537: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 220, 255, 1)"
  },
  ImageBackground_801_538: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_801_539: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_801_540: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_801_541: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_801_542: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_801_543: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_801_543: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_801_544: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_801_544: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1101_502: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_1101_503: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1101_503: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1101_504: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_801_562: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186%")
  },
  View_801_563: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_801_564: {
    width: wp("39%"),
    height: hp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_801_565: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 220, 255, 1)"
  },
  ImageBackground_801_566: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_801_567: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_801_568: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_801_569: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_801_570: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_801_571: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_801_571: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_801_572: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_801_572: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1101_508: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  View_1101_509: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1101_509: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1101_510: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_801_520: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("11%")
  },
  View_801_521: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_801_522: {
    width: wp("39%"),
    height: hp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_801_523: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 220, 255, 1)"
  },
  ImageBackground_801_524: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_801_525: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_801_526: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_801_527: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_801_528: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_801_529: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_801_529: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_801_530: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_801_530: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1101_499: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_1101_500: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1101_500: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1101_501: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_801_548: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("98%")
  },
  View_801_549: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_801_550: {
    width: wp("39%"),
    height: hp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_801_551: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 220, 255, 1)"
  },
  ImageBackground_801_552: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_801_553: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_801_554: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_801_555: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_801_556: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_801_557: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_801_557: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_801_558: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_801_558: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1101_505: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_1101_506: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1101_506: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1101_507: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_801_576: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("186%")
  },
  View_801_577: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_801_578: {
    width: wp("39%"),
    height: hp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_801_579: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 220, 255, 1)"
  },
  ImageBackground_801_580: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_801_581: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_801_582: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_801_583: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_801_584: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_801_585: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_801_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_801_586: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_801_586: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1101_511: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  View_1101_512: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1101_512: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1101_513: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_714_496: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  View_714_489: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_714_489: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_714_493: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_714_493: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_714_494: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_714_494: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_714_495: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_714_495: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_779_524: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_714_488: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_773_552: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("13%")
  },
  View_366_296: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_365_415: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_714_465: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_365_417: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_365_417: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_365_418: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_365_418: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_714_479: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_714_479: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_714_466: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_714_467: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_714_469: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_714_471: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_714_472: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_714_476: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_714_477: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_715_898: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I715_898_706_931: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_I715_898_706_932: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I715_898_706_933: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I715_898_706_934: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_898_706_935: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_898_706_937: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_937: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_898_706_938: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_938: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_898_706_939: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_939: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_898_706_940: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_940: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_898_706_941: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_898_706_941: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I715_898_1117_483: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
