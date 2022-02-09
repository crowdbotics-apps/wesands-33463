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
      <View style={styles.View_904_573}>
        <View style={styles.View_I904_573_547_576} />
        <View style={styles.View_I904_573_706_538}>
          <View style={styles.View_I904_573_705_523}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe5/50b3/737ca801c372abb65df39f4656ea7d16"
              }}
              style={styles.ImageBackground_I904_573_705_524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cac5/e1c8/0e2023540af6b642a72130a72ad7f390"
              }}
              style={styles.ImageBackground_I904_573_705_526}
            />
            <View style={styles.View_I904_573_705_528}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d837/3d9d/755ed26ebc88104349ac32d05ce2369d"
                }}
                style={styles.ImageBackground_I904_573_705_529}
              />
            </View>
            <View style={styles.View_I904_573_705_533}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d2/7396/8c97eec650ab4b62f068e93ffc464ade"
                }}
                style={styles.ImageBackground_I904_573_705_534}
              />
            </View>
          </View>
          <View style={styles.View_I904_573_705_522}>
            <Text style={styles.Text_I904_573_705_522}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </Text>
          </View>
          <View style={styles.View_I904_573_706_577}>
            <Text style={styles.Text_I904_573_706_577}>
              We are always open to discuss your project and improve your online
              presence.
            </Text>
          </View>
          <View style={styles.View_I904_573_705_521}>
            <Text style={styles.Text_I904_573_705_521}>Lets Talk!</Text>
          </View>
        </View>
        <View style={styles.View_I904_573_706_539}>
          <View style={styles.View_I904_573_547_578} />
          <View style={styles.View_I904_573_547_604}>
            <Text style={styles.Text_I904_573_547_604}>
              Copyright 2021, Finsweet.com
            </Text>
          </View>
          <View style={styles.View_I904_573_547_583}>
            <Text style={styles.Text_I904_573_547_583}>Home</Text>
          </View>
          <View style={styles.View_I904_573_547_584}>
            <Text style={styles.Text_I904_573_547_584}>About us</Text>
          </View>
          <View style={styles.View_I904_573_547_585}>
            <Text style={styles.Text_I904_573_547_585}>Features</Text>
          </View>
          <View style={styles.View_I904_573_547_586}>
            <Text style={styles.Text_I904_573_547_586}>Pricing</Text>
          </View>
          <View style={styles.View_I904_573_547_587}>
            <Text style={styles.Text_I904_573_547_587}>FAQ</Text>
          </View>
          <View style={styles.View_I904_573_547_588}>
            <Text style={styles.Text_I904_573_547_588}>Blog</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9655/ba54/1eb775c43a1d382ac9df2f3a1db77a74"
          }}
          style={styles.ImageBackground_I904_573_547_589}
        />
        <View style={styles.View_I904_573_778_990}>
          <View style={styles.View_I904_573_706_578} />
          <View style={styles.View_I904_573_706_579}>
            <View style={styles.View_I904_573_706_581}>
              <Text style={styles.Text_I904_573_706_581}>
                contact@website.com
              </Text>
            </View>
            <View style={styles.View_I904_573_706_582}>
              <Text style={styles.Text_I904_573_706_582}>Email me at</Text>
            </View>
            <View style={styles.View_I904_573_706_584}>
              <Text style={styles.Text_I904_573_706_584}>0927 6277 28525</Text>
            </View>
            <View style={styles.View_I904_573_706_585}>
              <Text style={styles.Text_I904_573_706_585}>Call us</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_778_537}>
        <View style={styles.View_706_1890} />
        <View style={styles.View_1101_498}>
          <View style={styles.View_718_376}>
            <View style={styles.View_718_377} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05f4/09bd/1763ce215acecfc8d4e9047f085afee9"
              }}
              style={styles.ImageBackground_718_378}
            />
            <View style={styles.View_718_380}>
              <Text style={styles.Text_718_380}>Design Lead</Text>
            </View>
            <View style={styles.View_718_381}>
              <Text style={styles.Text_718_381}>Paul Jones</Text>
            </View>
          </View>
          <View style={styles.View_718_370}>
            <View style={styles.View_718_371} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/647b/4502/6b6878e17ea2ee54c17d6b693e0826da"
              }}
              style={styles.ImageBackground_718_372}
            />
            <View style={styles.View_718_374}>
              <Text style={styles.Text_718_374}>CTO</Text>
            </View>
            <View style={styles.View_718_375}>
              <Text style={styles.Text_718_375}>Simon Adams</Text>
            </View>
          </View>
          <View style={styles.View_718_382}>
            <View style={styles.View_718_383} />
            <View style={styles.View_718_386}>
              <Text style={styles.Text_718_386}>Project Manager</Text>
            </View>
            <View style={styles.View_718_387}>
              <Text style={styles.Text_718_387}>Sara Hardin</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a8/f0e0/df77d50421c58cc2f60b91aaf3153b3b"
              }}
              style={styles.ImageBackground_718_384}
            />
          </View>
          <View style={styles.View_778_536}>
            <View style={styles.View_718_369}>
              <View style={styles.View_718_363} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d3c/3025/9805b110c68af312b57d50e903c88857"
                }}
                style={styles.ImageBackground_718_364}
              />
              <View style={styles.View_718_367}>
                <Text style={styles.Text_718_367}>CEO</Text>
              </View>
              <View style={styles.View_718_368}>
                <Text style={styles.Text_718_368}>John Smith</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9f8/ffe2/46d80774cc1e44c878e4107c95654598"
              }}
              style={styles.ImageBackground_759_560}
            />
            <View style={styles.View_759_561}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b85/6d1d/855f1d2e8838b3ae3d19ee53c9e1bb99"
                }}
                style={styles.ImageBackground_759_562}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a4d/cc60/1037ddce0436ba53efb5ad457f8d2b8d"
                }}
                style={styles.ImageBackground_759_564}
              />
              <View style={styles.View_759_566}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/830c/d09f/7443f2fb95a49a3c9e45bc1c09627db2"
                  }}
                  style={styles.ImageBackground_759_567}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_706_1807}>
          <Text style={styles.Text_706_1807}>Meet our team</Text>
        </View>
      </View>
      <View style={styles.View_778_535}>
        <View style={styles.View_706_1459}>
          <Text style={styles.Text_706_1459}>
            The benefits of working with us
          </Text>
        </View>
        <View style={styles.View_904_1037}>
          <View style={styles.View_904_1038}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d95/d068/7b276d4da449b7ba5ed9d55b0582513d"
              }}
              style={styles.ImageBackground_904_1039}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b0d/4c42/d06264bd20878066cbbd8bc1f7c6cf13"
              }}
              style={styles.ImageBackground_904_1053}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ba/b694/63419ecb703aa637eae7a42c646af7b1"
              }}
              style={styles.ImageBackground_904_1066}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d8/4b89/1d182949396cec29ec08c28b57be4b72"
              }}
              style={styles.ImageBackground_904_1069}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3429/f4d0/d51a6b46c8408010dc18a55c18ed5701"
              }}
              style={styles.ImageBackground_904_1080}
            />
          </View>
          <View style={styles.View_904_1083}>
            <View style={styles.View_904_1084}>
              <View style={styles.View_904_1085}>
                <Text style={styles.Text_904_1085}>100.000+</Text>
              </View>
            </View>
            <View style={styles.View_904_1086}>
              <Text style={styles.Text_904_1086}>Finsweet Users</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_778_532}>
          <View style={styles.View_706_1792} />
          <View style={styles.View_706_1793}>
            <View style={styles.View_706_1798}>
              <Text style={styles.Text_706_1798}>Friendly Support</Text>
            </View>
            <View style={styles.View_706_1799}>
              <Text style={styles.Text_706_1799}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf49/7cc3/50860c1885290d9669d8090bc009cf14"
            }}
            style={styles.ImageBackground_757_987}
          />
        </View>
        <View style={styles.View_778_533}>
          <View style={styles.View_706_1783} />
          <View style={styles.View_706_1789}>
            <Text style={styles.Text_706_1789}>Perfectly Responsive</Text>
          </View>
          <View style={styles.View_706_1790}>
            <Text style={styles.Text_706_1790}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c8b/3f4a/ce6946d184099df323c672e66d4ff647"
            }}
            style={styles.ImageBackground_757_994}
          />
        </View>
        <View style={styles.View_778_534}>
          <View style={styles.View_706_1774} />
          <View style={styles.View_706_1780}>
            <Text style={styles.Text_706_1780}>Customize with ease</Text>
          </View>
          <View style={styles.View_706_1781}>
            <Text style={styles.Text_706_1781}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </Text>
          </View>
          <View style={styles.View_757_1002}>
            <View style={styles.View_757_1003}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0e8/8a2a/0f7ee93656959bcc3e65c46b786cd3a9"
                }}
                style={styles.ImageBackground_757_1004}
              />
            </View>
            <View style={styles.View_757_1006}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/668d/50a9/64a004dacee5519f26c3376a3abb900a"
                }}
                style={styles.ImageBackground_757_1007}
              />
            </View>
            <View style={styles.View_757_1009}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/612d/bf29/29230115ae2cfb6001c0ba1175442fdb"
                }}
                style={styles.ImageBackground_757_1010}
              />
            </View>
            <View style={styles.View_757_1012}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd72/96dd/99db4f25958c25016ec918dee77e4cbe"
                }}
                style={styles.ImageBackground_757_1013}
              />
            </View>
            <View style={styles.View_757_1015}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd3d/8a24/1b631d4b84e7155a5ec92a1afceda4a1"
                }}
                style={styles.ImageBackground_757_1016}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_706_1454}>
        <View style={styles.View_706_1453} />
        <View style={styles.View_1101_490} />
        <View style={styles.View_706_1445}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad5/bfd1/5e1c3ec3be9c5751637cf766404bd133"
            }}
            style={styles.ImageBackground_757_745}
          />
          <View style={styles.View_706_1125}>
            <View style={styles.View_706_1120}>
              <Text style={styles.Text_706_1120}>Our Mission </Text>
            </View>
            <View style={styles.View_706_1121}>
              <Text style={styles.Text_706_1121}>Inspire, Innovate, Share</Text>
            </View>
            <View style={styles.View_706_1122}>
              <Text style={styles.Text_706_1122}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_706_1446}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/309b/876f/8609ecf512a13db59fb318ae3e02e4c6"
            }}
            style={styles.ImageBackground_706_1448}
          />
          <View style={styles.View_706_1449}>
            <View style={styles.View_706_1450}>
              <Text style={styles.Text_706_1450}>Our Vision</Text>
            </View>
            <View style={styles.View_706_1451}>
              <Text style={styles.Text_706_1451}>Laser focus</Text>
            </View>
            <View style={styles.View_706_1452}>
              <Text style={styles.Text_706_1452}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_706_1437}>
        <View style={styles.View_706_1434}>
          <View style={styles.View_706_1416}>
            <View style={styles.View_706_1417}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde9/2380/aaff4c90c78e91675b82d26c1290741c"
                }}
                style={styles.ImageBackground_706_1418}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae6/5a95/e02979a9aa190ad524366918e9257fe3"
                }}
                style={styles.ImageBackground_706_1419}
              />
            </View>
            <View style={styles.View_773_519}>
              <Text style={styles.Text_773_519}>Conception</Text>
            </View>
            <View style={styles.View_706_1421}>
              <Text style={styles.Text_706_1421}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
            </View>
          </View>
          <View style={styles.View_903_519}>
            <View style={styles.View_903_520}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde9/2380/aaff4c90c78e91675b82d26c1290741c"
                }}
                style={styles.ImageBackground_903_521}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae6/5a95/e02979a9aa190ad524366918e9257fe3"
                }}
                style={styles.ImageBackground_903_522}
              />
            </View>
            <View style={styles.View_903_523}>
              <Text style={styles.Text_903_523}>Planning</Text>
            </View>
            <View style={styles.View_903_524}>
              <Text style={styles.Text_903_524}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
            </View>
          </View>
          <View style={styles.View_903_525}>
            <View style={styles.View_903_526}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde9/2380/aaff4c90c78e91675b82d26c1290741c"
                }}
                style={styles.ImageBackground_903_527}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae6/5a95/e02979a9aa190ad524366918e9257fe3"
                }}
                style={styles.ImageBackground_903_528}
              />
            </View>
            <View style={styles.View_903_529}>
              <Text style={styles.Text_903_529}>Design</Text>
            </View>
            <View style={styles.View_903_530}>
              <Text style={styles.Text_903_530}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
            </View>
          </View>
          <View style={styles.View_903_531}>
            <View style={styles.View_903_532}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde9/2380/aaff4c90c78e91675b82d26c1290741c"
                }}
                style={styles.ImageBackground_903_533}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae6/5a95/e02979a9aa190ad524366918e9257fe3"
                }}
                style={styles.ImageBackground_903_534}
              />
            </View>
            <View style={styles.View_903_535}>
              <Text style={styles.Text_903_535}>Development</Text>
            </View>
            <View style={styles.View_903_536}>
              <Text style={styles.Text_903_536}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_706_1378}>
          <Text style={styles.Text_706_1378}>The process we follow</Text>
        </View>
      </View>
      <View style={styles.View_778_531}>
        <View style={styles.View_706_1101} />
        <View style={styles.View_706_1112}>
          <View style={styles.View_706_1103}>
            <Text style={styles.Text_706_1103}>Who we are</Text>
          </View>
          <View style={styles.View_706_1104}>
            <Text style={styles.Text_706_1104}>Goal focussed</Text>
          </View>
          <View style={styles.View_706_1105}>
            <Text style={styles.Text_706_1105}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={styles.View_706_1114}>
            <Text style={styles.Text_706_1114}>Continuous improvement</Text>
          </View>
          <View style={styles.View_706_1115}>
            <Text style={styles.Text_706_1115}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3273/d176/798b38f170bb6eb99d14a5dd8c06dab2"
          }}
          style={styles.ImageBackground_757_746}
        />
      </View>
      <View style={styles.View_778_530}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cb2/cf4b/0fcd4a575d0f02b403815a8888224253"
          }}
          style={styles.ImageBackground_758_974}
        />
        <View style={styles.View_706_1074}>
          <View style={styles.View_706_1075}>
            <Text style={styles.Text_706_1075}>About us</Text>
          </View>
          <View style={styles.View_706_1076}>
            <Text style={styles.Text_706_1076}>Our designs solve problems</Text>
          </View>
          <View style={styles.View_706_1110}>
            <Text style={styles.Text_706_1110}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_715_872}>
        <View style={styles.View_I715_872_706_931} />
        <View style={styles.View_I715_872_706_932}>
          <View style={styles.View_I715_872_706_933} />
          <View style={styles.View_I715_872_706_934}>
            <Text style={styles.Text_I715_872_706_934}>Contact us</Text>
          </View>
        </View>
        <View style={styles.View_I715_872_706_935}>
          <Text style={styles.Text_I715_872_706_935}>Home</Text>
        </View>
        <View style={styles.View_I715_872_706_937}>
          <Text style={styles.Text_I715_872_706_937}>About us</Text>
        </View>
        <View style={styles.View_I715_872_706_938}>
          <Text style={styles.Text_I715_872_706_938}>Features</Text>
        </View>
        <View style={styles.View_I715_872_706_939}>
          <Text style={styles.Text_I715_872_706_939}>Pricing</Text>
        </View>
        <View style={styles.View_I715_872_706_940}>
          <Text style={styles.Text_I715_872_706_940}>FAQ</Text>
        </View>
        <View style={styles.View_I715_872_706_941}>
          <Text style={styles.Text_I715_872_706_941}>Blog</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ef/4a3c/3e7356eb798de2cf0baef6eb6e83db47"
          }}
          style={styles.ImageBackground_I715_872_1117_483}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("687%") },
  View_904_573: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("620%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I904_573_547_576: {
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
  View_I904_573_706_538: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%")
  },
  View_I904_573_705_523: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_I904_573_705_524: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I904_573_705_526: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I904_573_705_528: {
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
  ImageBackground_I904_573_705_529: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_573_705_533: {
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
  ImageBackground_I904_573_705_534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_573_705_522: {
    width: wp("25%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_705_522: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_706_577: {
    width: wp("25%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_706_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_705_521: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_705_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_706_539: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%")
  },
  View_I904_573_547_578: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I904_573_547_604: {
    width: wp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_604: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_547_583: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_583: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_547_584: {
    width: wp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_547_585: {
    width: wp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_547_586: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_586: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_547_587: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_587: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_547_588: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_547_588: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I904_573_547_589: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%")
  },
  View_I904_573_778_990: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("41%")
  },
  View_I904_573_706_578: {
    width: wp("32%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_I904_573_706_579: {
    width: wp("21%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I904_573_706_581: {
    width: wp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_706_581: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_706_582: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_706_582: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_706_584: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_706_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_573_706_585: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_573_706_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_778_537: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("523%")
  },
  View_706_1890: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_1101_498: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("33%")
  },
  View_718_376: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_718_377: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_718_378: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_718_380: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_718_380: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_718_381: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_718_381: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_718_370: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_718_371: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_718_372: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_718_374: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_718_374: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_718_375: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_718_375: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_718_382: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%")
  },
  View_718_383: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_718_386: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_718_386: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_718_387: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_718_387: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_718_384: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_778_536: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_718_369: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_718_363: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_718_364: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_718_367: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_718_367: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_718_368: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_718_368: {
    color: "rgba(29, 33, 48, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_759_560: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_759_561: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("24%")
  },
  ImageBackground_759_562: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_759_564: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_759_566: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_759_567: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_706_1807: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_1807: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_778_535: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("420%")
  },
  View_706_1459: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1459: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_1037: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74%")
  },
  View_904_1038: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  ImageBackground_904_1039: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_904_1053: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_904_1066: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_904_1069: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_904_1080: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_904_1083: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_1084: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_1085: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_1085: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_1086: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_904_1086: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_778_532: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("24%")
  },
  View_706_1792: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_706_1793: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  View_706_1798: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1798: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1799: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_706_1799: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_987: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_778_533: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("24%")
  },
  View_706_1783: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_706_1789: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_706_1789: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1790: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_706_1790: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_994: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_778_534: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_706_1774: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_706_1780: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_706_1780: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1781: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_706_1781: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_757_1002: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_757_1003: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_757_1004: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_1006: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_757_1007: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_1009: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_757_1010: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_1012: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_757_1013: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_1015: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_757_1016: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_706_1454: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("263%")
  },
  View_706_1453: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 244, 250, 1)"
  },
  View_1101_490: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 244, 250, 1)"
  },
  View_706_1445: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("17%")
  },
  ImageBackground_757_745: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_1125: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_706_1120: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1120: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1121: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_706_1121: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1122: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_706_1122: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1446: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("77%")
  },
  ImageBackground_706_1448: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_1449: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%")
  },
  View_706_1450: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1450: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1451: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_706_1451: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1452: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_706_1452: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1437: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("209%")
  },
  View_706_1434: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_706_1416: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_706_1417: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_1418: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_1419: {
    width: wp("14%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_773_519: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_773_519: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1421: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_706_1421: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_903_519: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_903_520: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_903_521: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_903_522: {
    width: wp("14%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_903_523: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_903_523: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_903_524: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_903_524: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_903_525: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_903_526: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_903_527: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_903_528: {
    width: wp("14%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_903_529: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_903_529: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_903_530: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_903_530: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_903_531: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%")
  },
  View_903_532: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_903_533: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_903_534: {
    width: wp("14%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_903_535: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_903_535: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_903_536: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_903_536: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1378: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1378: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_778_531: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("93%")
  },
  View_706_1101: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 245, 1)"
  },
  View_706_1112: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%")
  },
  View_706_1103: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1103: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1104: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_706_1104: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_706_1105: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1114: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_706_1114: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1115: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_706_1115: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_746: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    resizeMode: "cover"
  },
  View_778_530: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("30%")
  },
  ImageBackground_758_974: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_1074: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_706_1075: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1075: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1076: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_706_1076: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 43,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1110: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_706_1110: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_715_872: {
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
  View_I715_872_706_931: {
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
  View_I715_872_706_932: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I715_872_706_933: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I715_872_706_934: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_872_706_935: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_872_706_937: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_937: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_872_706_938: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_938: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_872_706_939: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_939: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_872_706_940: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_940: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_872_706_941: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_872_706_941: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I715_872_1117_483: {
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
