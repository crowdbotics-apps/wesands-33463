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
      <View style={styles.View_904_537}>
        <View style={styles.View_I904_537_547_576} />
        <View style={styles.View_I904_537_706_538}>
          <View style={styles.View_I904_537_705_523}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe5/50b3/737ca801c372abb65df39f4656ea7d16"
              }}
              style={styles.ImageBackground_I904_537_705_524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cac5/e1c8/0e2023540af6b642a72130a72ad7f390"
              }}
              style={styles.ImageBackground_I904_537_705_526}
            />
            <View style={styles.View_I904_537_705_528}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5393/602e/afff11e2947aa58f6c907621fd6638ec"
                }}
                style={styles.ImageBackground_I904_537_705_529}
              />
            </View>
            <View style={styles.View_I904_537_705_533}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d2/7396/8c97eec650ab4b62f068e93ffc464ade"
                }}
                style={styles.ImageBackground_I904_537_705_534}
              />
            </View>
          </View>
          <View style={styles.View_I904_537_705_522}>
            <Text style={styles.Text_I904_537_705_522}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </Text>
          </View>
          <View style={styles.View_I904_537_706_577}>
            <Text style={styles.Text_I904_537_706_577}>
              We are always open to discuss your project and improve your online
              presence.
            </Text>
          </View>
          <View style={styles.View_I904_537_705_521}>
            <Text style={styles.Text_I904_537_705_521}>Lets Talk!</Text>
          </View>
        </View>
        <View style={styles.View_I904_537_706_539}>
          <View style={styles.View_I904_537_547_578} />
          <View style={styles.View_I904_537_547_604}>
            <Text style={styles.Text_I904_537_547_604}>
              Copyright 2022, Finsweet.com
            </Text>
          </View>
          <View style={styles.View_I904_537_547_583}>
            <Text style={styles.Text_I904_537_547_583}>Home</Text>
          </View>
          <View style={styles.View_I904_537_547_584}>
            <Text style={styles.Text_I904_537_547_584}>About us</Text>
          </View>
          <View style={styles.View_I904_537_547_585}>
            <Text style={styles.Text_I904_537_547_585}>Features</Text>
          </View>
          <View style={styles.View_I904_537_547_586}>
            <Text style={styles.Text_I904_537_547_586}>Pricing</Text>
          </View>
          <View style={styles.View_I904_537_547_587}>
            <Text style={styles.Text_I904_537_547_587}>FAQ</Text>
          </View>
          <View style={styles.View_I904_537_547_588}>
            <Text style={styles.Text_I904_537_547_588}>Blog</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9655/ba54/1eb775c43a1d382ac9df2f3a1db77a74"
          }}
          style={styles.ImageBackground_I904_537_547_589}
        />
        <View style={styles.View_I904_537_778_990}>
          <View style={styles.View_I904_537_706_578} />
          <View style={styles.View_I904_537_706_579}>
            <View style={styles.View_I904_537_706_581}>
              <Text style={styles.Text_I904_537_706_581}>
                contact@website.com
              </Text>
            </View>
            <View style={styles.View_I904_537_706_582}>
              <Text style={styles.Text_I904_537_706_582}>Email me at</Text>
            </View>
            <View style={styles.View_I904_537_706_584}>
              <Text style={styles.Text_I904_537_706_584}>0927 6277 28525</Text>
            </View>
            <View style={styles.View_I904_537_706_585}>
              <Text style={styles.Text_I904_537_706_585}>Call us</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_706_737}>
        <View style={styles.View_706_738}>
          <Text style={styles.Text_706_738}>Our blog</Text>
        </View>
        <View style={styles.View_706_739}>
          <View style={styles.View_706_742}>
            <View style={styles.View_706_743}>
              <Text style={styles.Text_706_743}>Read More</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6e3/0b36/ff3ad6f971c132774ada0fcce7ed2cfb"
              }}
              style={styles.ImageBackground_706_744}
            />
          </View>
          <View style={styles.View_706_741}>
            <Text style={styles.Text_706_741}>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </Text>
          </View>
          <View style={styles.View_706_740}>
            <Text style={styles.Text_706_740}>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </Text>
          </View>
          <View style={styles.View_706_746}>
            <Text style={styles.Text_706_746}>19 Jan 2022</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45af/3e05/233147c37cdc33b346d6a7a56c064400"
            }}
            style={styles.ImageBackground_706_745}
          />
        </View>
        <View style={styles.View_706_747}>
          <View style={styles.View_706_750}>
            <View style={styles.View_706_751}>
              <Text style={styles.Text_706_751}>Read More</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6e3/0b36/ff3ad6f971c132774ada0fcce7ed2cfb"
              }}
              style={styles.ImageBackground_706_752}
            />
          </View>
          <View style={styles.View_706_749}>
            <Text style={styles.Text_706_749}>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </Text>
          </View>
          <View style={styles.View_706_748}>
            <Text style={styles.Text_706_748}>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </Text>
          </View>
          <View style={styles.View_706_754}>
            <Text style={styles.Text_706_754}>19 Jan 2022</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52bf/f206/7d62b7d23979bd72edb34ec68f7db5f4"
            }}
            style={styles.ImageBackground_706_753}
          />
        </View>
        <View style={styles.View_706_755}>
          <View style={styles.View_706_758}>
            <View style={styles.View_706_759}>
              <Text style={styles.Text_706_759}>Read More</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6e3/0b36/ff3ad6f971c132774ada0fcce7ed2cfb"
              }}
              style={styles.ImageBackground_706_760}
            />
          </View>
          <View style={styles.View_706_757}>
            <Text style={styles.Text_706_757}>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </Text>
          </View>
          <View style={styles.View_706_756}>
            <Text style={styles.Text_706_756}>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </Text>
          </View>
          <View style={styles.View_706_762}>
            <Text style={styles.Text_706_762}>19 Jan 2022</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a574/b98f/46f52ac39ff8adbde3bbea843e6d9bc5"
            }}
            style={styles.ImageBackground_706_761}
          />
        </View>
      </View>
      <View style={styles.View_706_793}>
        <View style={styles.View_706_794}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dc0/d2fa/237ab03a3f502ef9cc20c494c8a91c6f"
            }}
            style={styles.ImageBackground_757_753}
          />
          <View style={styles.View_706_795} />
          <View style={styles.View_706_796}>
            <View style={styles.View_706_797}>
              <Text style={styles.Text_706_797}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </Text>
            </View>
            <View style={styles.View_706_798}>
              <Text style={styles.Text_706_798}>
                Building stellar websites for early startups
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_706_799}>
          <View style={styles.View_706_800} />
          <View style={styles.View_758_767}>
            <View style={styles.View_758_768}>
              <Text style={styles.Text_758_768}>Get in touch with us</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd9/3544/fe16d0f94ced4f82e371f6cf9bea0c30"
              }}
              style={styles.ImageBackground_758_769}
            />
          </View>
          <View style={styles.View_706_801}>
            <View style={styles.View_I706_801_48_32}>
              <Text style={styles.Text_I706_801_48_32}>Send an Inquiry</Text>
            </View>
          </View>
          <View style={styles.View_706_802}>
            <Text style={styles.Text_706_802}>Send inquiry</Text>
          </View>
          <View style={styles.View_706_803}>
            <Text style={styles.Text_706_803}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Text>
          </View>
          <View style={styles.View_706_804}>
            <View style={styles.View_706_805} />
            <View style={styles.View_706_806} />
            <View style={styles.View_706_807} />
            <View style={styles.View_706_808}>
              <View style={styles.View_706_809}>
                <Text style={styles.Text_706_809}>Your Name</Text>
              </View>
              <View style={styles.View_706_810}>
                <Text style={styles.Text_706_810}>Email</Text>
              </View>
              <View style={styles.View_706_811}>
                <Text style={styles.Text_706_811}>
                  Paste your Figma design URL
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_706_763}>
        <View style={styles.View_706_764}>
          <View style={styles.View_706_765}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1032/0741/f369251f21372cfd354eec97fbb1aa5d"
              }}
              style={styles.ImageBackground_706_766}
            />
            <View style={styles.View_706_767}>
              <Text style={styles.Text_706_767}>
                What is your class naming convention?
              </Text>
            </View>
            <View style={styles.View_706_768}>
              <Text style={styles.Text_706_768}>05</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b0/43bf/1e3cc18bb153b70e8400df0cda66d2df"
            }}
            style={styles.ImageBackground_706_769}
          />
          <View style={styles.View_706_770}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1032/0741/f369251f21372cfd354eec97fbb1aa5d"
              }}
              style={styles.ImageBackground_706_771}
            />
            <View style={styles.View_706_772}>
              <Text style={styles.Text_706_772}>
                I have a bigger project. Can you handle it?
              </Text>
            </View>
            <View style={styles.View_706_773}>
              <Text style={styles.Text_706_773}>04</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b0/43bf/1e3cc18bb153b70e8400df0cda66d2df"
            }}
            style={styles.ImageBackground_706_774}
          />
          <View style={styles.View_706_775}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1032/0741/f369251f21372cfd354eec97fbb1aa5d"
              }}
              style={styles.ImageBackground_706_776}
            />
            <View style={styles.View_706_777}>
              <Text style={styles.Text_706_777}>How do you communicate?</Text>
            </View>
            <View style={styles.View_706_778}>
              <Text style={styles.Text_706_778}>03</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b0/43bf/1e3cc18bb153b70e8400df0cda66d2df"
            }}
            style={styles.ImageBackground_706_779}
          />
          <View style={styles.View_706_780}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1032/0741/f369251f21372cfd354eec97fbb1aa5d"
              }}
              style={styles.ImageBackground_706_781}
            />
            <View style={styles.View_706_782}>
              <Text style={styles.Text_706_782}>
                What is your class naming convention?
              </Text>
            </View>
            <View style={styles.View_706_783}>
              <Text style={styles.Text_706_783}>02</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b0/43bf/1e3cc18bb153b70e8400df0cda66d2df"
            }}
            style={styles.ImageBackground_706_784}
          />
          <View style={styles.View_706_785}>
            <View style={styles.View_706_786}>
              <Text style={styles.Text_706_786}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a39c/9aa7/623a324d15e8cb8bc77ac65c3b593d64"
              }}
              style={styles.ImageBackground_706_787}
            />
            <View style={styles.View_706_788}>
              <Text style={styles.Text_706_788}>
                How much time does it take?
              </Text>
            </View>
            <View style={styles.View_706_789}>
              <Text style={styles.Text_706_789}>01</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_706_790}>
          <View style={styles.View_706_791}>
            <Text style={styles.Text_706_791}>Frequently asked questions</Text>
          </View>
          <View style={styles.View_706_792}>
            <Text style={styles.Text_706_792}>Contact us for more info</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_706_872}>
        <View style={styles.View_706_873} />
        <View style={styles.View_706_874}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec80/ff38/ffc084d14897a661c3193324443dec4f"
            }}
            style={styles.ImageBackground_706_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0be/97c9/e8dfd41cf64365b0640712f540cac35e"
            }}
            style={styles.ImageBackground_706_876}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a577/5442/ace9bbb71087cd4ab9fcd77c557c1b5d"
            }}
            style={styles.ImageBackground_706_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8935/229d/45c274a093e0dd9e7d7c6c61a175fc44"
            }}
            style={styles.ImageBackground_706_878}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d6/9e7d/a16440c1145a3663d6b886366e49ca85"
            }}
            style={styles.ImageBackground_706_879}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0326/da57/43a514a0185d13b7926b1a2aefd55304"
            }}
            style={styles.ImageBackground_706_880}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f9e/d45e/887197cdab79d6c4b81b598ac9b7679a"
            }}
            style={styles.ImageBackground_706_881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630d/268b/b049d12e537e166fc822cb9e8dfe5d29"
            }}
            style={styles.ImageBackground_706_882}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a94d/a534/e34800f3c9a74fd26be3df53a8e7e2a6"
            }}
            style={styles.ImageBackground_706_883}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d7b/9a5c/f883b6569ea0063ffc810b6779cee8c5"
            }}
            style={styles.ImageBackground_706_884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/081a/6b40/6c93c7d95d402689f87d849ca278c04f"
            }}
            style={styles.ImageBackground_706_885}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a68/0bbb/e936e890bcc5012aae1f5e34bd81d13a"
            }}
            style={styles.ImageBackground_706_886}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d138/a802/025b303c0cf9d6e49dffc3b0327ffa3e"
            }}
            style={styles.ImageBackground_706_887}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d26c/4596/62216e24974e3859496a0a266082f0c8"
            }}
            style={styles.ImageBackground_706_888}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86b1/b554/38b742c151f3f4ced0f014deec579e41"
            }}
            style={styles.ImageBackground_706_889}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bde/b79e/c76039ac0812cb4b96152b0443854f8e"
            }}
            style={styles.ImageBackground_706_890}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65d/283f/cf210f632299415178b2e78f493b0e6f"
            }}
            style={styles.ImageBackground_706_891}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db92/176f/b67c67775a1c4b61390c95600d5a6ec6"
            }}
            style={styles.ImageBackground_706_892}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6359/7df1/6cd5be8a428a7016f74db64589cefb81"
            }}
            style={styles.ImageBackground_706_893}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b431/ba66/61c8d5096f9ffb2b2688ecfc6a6b8a3c"
            }}
            style={styles.ImageBackground_706_894}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4737/dfc1/08c4924710861a389b5a51bb0c0747da"
            }}
            style={styles.ImageBackground_706_895}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7874/91b6/33d5ccd420f0103ad81ad7457d4b3f4d"
            }}
            style={styles.ImageBackground_706_896}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40a9/faa0/edfa4d4823d5339017b4d0886c076d78"
            }}
            style={styles.ImageBackground_706_897}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a73/310c/8fd00c56ecb9a91accc54eb83ac791e1"
            }}
            style={styles.ImageBackground_706_898}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f27/416d/b782e4bf0c97039a38e05a1a097f1788"
            }}
            style={styles.ImageBackground_706_899}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fa3/11fc/6b6f8cc531ec743c15b646ce1f5c4bad"
            }}
            style={styles.ImageBackground_706_900}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2a4/2122/e61578be6605ad7e928084b9dffeecd0"
            }}
            style={styles.ImageBackground_706_901}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/503b/7ce8/f03b5ef768310d7fd19bfb1154e8f836"
            }}
            style={styles.ImageBackground_706_902}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b4/5831/096156520a6f32fe42715d5c38845ff9"
            }}
            style={styles.ImageBackground_706_903}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/423f/c591/8ed25c6b94f74876eb9057c1ba33c890"
            }}
            style={styles.ImageBackground_706_904}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df1d/ca07/e3ee69cf8bc9e20619aed4aeb05337e2"
            }}
            style={styles.ImageBackground_706_905}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55e1/1954/01abbb30e9538b6d4c4e90a06f3d2750"
            }}
            style={styles.ImageBackground_706_906}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c89/f435/72d47f713fbf84331c2efbaf27cfa0c2"
            }}
            style={styles.ImageBackground_706_907}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45f4/62d8/e290d159b83cd01b4aa3a599e7d6051b"
            }}
            style={styles.ImageBackground_706_908}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7689/cc1c/cb836c0f9116cd3ebd84bec8156f13c0"
            }}
            style={styles.ImageBackground_706_909}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc37/b0af/ffc74656041dc41404a19ea3c526e31e"
            }}
            style={styles.ImageBackground_706_910}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/495b/cd4b/9421964c05f2934f65bd209dc1409357"
            }}
            style={styles.ImageBackground_706_911}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00ca/49f7/677742788bf1014e15e0643e94014a97"
            }}
            style={styles.ImageBackground_706_912}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d1d/98e4/542a044cae845e1228efd47684e53b8a"
            }}
            style={styles.ImageBackground_706_913}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d610/7d3b/641ce6fb8e9a5f5465fbab664f21df0e"
            }}
            style={styles.ImageBackground_706_914}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d1d/98e4/542a044cae845e1228efd47684e53b8a"
            }}
            style={styles.ImageBackground_706_915}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d610/7d3b/641ce6fb8e9a5f5465fbab664f21df0e"
            }}
            style={styles.ImageBackground_706_916}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb41/6d0a/f3698e0c88f16f6136b98bcc2879bc0d"
            }}
            style={styles.ImageBackground_706_917}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/294b/5988/9a4bdba1461eae8625c0f50d602dc5a0"
            }}
            style={styles.ImageBackground_706_918}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58ed/15bb/f279625d2302c2dfa01d6d44b1af6e1e"
            }}
            style={styles.ImageBackground_706_919}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44bd/4815/2258971511af6f4953a9a8e366c12988"
            }}
            style={styles.ImageBackground_706_920}
          />
        </View>
        <View style={styles.View_706_921}>
          <View style={styles.View_706_922}>
            <View style={styles.View_706_923}>
              <Text style={styles.Text_706_923}>View Pricing</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd9/3544/fe16d0f94ced4f82e371f6cf9bea0c30"
              }}
              style={styles.ImageBackground_706_924}
            />
          </View>
          <View style={styles.View_706_925}>
            <View style={styles.View_706_926}>
              <Text style={styles.Text_706_926}>View our work</Text>
            </View>
          </View>
          <View style={styles.View_706_927}>
            <View style={styles.View_706_928}>
              <Text style={styles.Text_706_928}>
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies nec dolor sit amet, scelerisque cursus purus.
              </Text>
            </View>
            <View style={styles.View_706_929}>
              <Text style={styles.Text_706_929}>
                Building stellar websites for early startups
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_706_1014}>
        <View style={styles.View_706_1015} />
        <View style={styles.View_706_1017}>
          <View style={styles.View_706_1018}>
            <Text style={styles.Text_706_1018}>
              What our clients say about us
            </Text>
          </View>
          <View style={styles.View_706_1019}>
            <Text style={styles.Text_706_1019}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </Text>
          </View>
        </View>
        <View style={styles.View_706_1020}>
          <View style={styles.View_706_1021}>
            <Text style={styles.Text_706_1021}>
              &quot;The best agency we’ve worked with so far. They understand
              our product and are able to add new features with a great
              focus.&quot;
            </Text>
          </View>
          <View style={styles.View_706_1022}>
            <View style={styles.View_757_795}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7255/ede9/89e1ac2e059d29ea92df26e15ad9e30e"
                }}
                style={styles.ImageBackground_757_796}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17d5/ba4e/b8c75c81a8b7479c08b0e17541ff2060"
                }}
                style={styles.ImageBackground_757_797}
              />
            </View>
            <View style={styles.View_706_1024}>
              <Text style={styles.Text_706_1024}>Jenny Wilson</Text>
            </View>
            <View style={styles.View_706_1025}>
              <Text style={styles.Text_706_1025}>Vice President</Text>
            </View>
          </View>
          <View style={styles.View_706_1026}>
            <View style={styles.View_706_1027}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2f/ea2b/9eb8d4b6195aed788ff0e2a5c60c1415"
                }}
                style={styles.ImageBackground_706_1028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff8a/9c4b/401db6c04155af40c2d09ebd84e90031"
                }}
                style={styles.ImageBackground_706_1030}
              />
            </View>
            <View style={styles.View_706_1031}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a3/19e6/4fbd9331a220b72ff7e3233ab371a221"
                }}
                style={styles.ImageBackground_706_1032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad89/9f62/ec0ec150bd19295970edc5ce990f11b9"
                }}
                style={styles.ImageBackground_706_1034}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_778_529}>
        <View style={styles.View_706_1216} />
        <View style={styles.View_778_524}>
          <View style={styles.View_706_1240} />
          <View style={styles.View_706_1246}>
            <Text style={styles.Text_706_1246}>Template Customization</Text>
          </View>
          <View style={styles.View_706_1247}>
            <Text style={styles.Text_706_1247}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2fa/3b97/b636b7eaa6d70c5999c6ccf869a65695"
            }}
            style={styles.ImageBackground_757_976}
          />
        </View>
        <View style={styles.View_778_521}>
          <View style={styles.View_706_1222} />
          <View style={styles.View_706_1229}>
            <Text style={styles.Text_706_1229}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Text>
          </View>
          <View style={styles.View_706_1228}>
            <Text style={styles.Text_706_1228}>Uses Client First</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf49/7cc3/50860c1885290d9669d8090bc009cf14"
            }}
            style={styles.ImageBackground_757_805}
          />
        </View>
        <View style={styles.View_778_522}>
          <View style={styles.View_706_1231} />
          <View style={styles.View_706_1237}>
            <Text style={styles.Text_706_1237}>Two Free Revision Round</Text>
          </View>
          <View style={styles.View_706_1238}>
            <Text style={styles.Text_706_1238}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6e/85b2/ef9716fae6d566fdc692f30aed436c96"
            }}
            style={styles.ImageBackground_757_843}
          />
        </View>
        <View style={styles.View_778_526}>
          <View style={styles.View_722_6534} />
          <View style={styles.View_722_6540}>
            <Text style={styles.Text_722_6540}>Quick Delivery</Text>
          </View>
          <View style={styles.View_722_6541}>
            <Text style={styles.Text_722_6541}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f1/42f9/d16863313a21b5cfbfd4aa1c5f4e3226"
            }}
            style={styles.ImageBackground_757_919}
          />
        </View>
        <View style={styles.View_778_527}>
          <View style={styles.View_722_6543} />
          <View style={styles.View_722_6549}>
            <Text style={styles.Text_722_6549}>Hands-on approach</Text>
          </View>
          <View style={styles.View_722_6550}>
            <Text style={styles.Text_722_6550}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Text>
          </View>
          <View style={styles.View_757_974}>
            <View style={styles.View_757_959}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0e8/8a2a/0f7ee93656959bcc3e65c46b786cd3a9"
                }}
                style={styles.ImageBackground_757_960}
              />
            </View>
            <View style={styles.View_757_962}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6b/2191/bc3ac4c7af6a5087ab09c772e7bfecb3"
                }}
                style={styles.ImageBackground_757_963}
              />
            </View>
            <View style={styles.View_757_965}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/612d/bf29/29230115ae2cfb6001c0ba1175442fdb"
                }}
                style={styles.ImageBackground_757_966}
              />
            </View>
            <View style={styles.View_757_968}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a18/a9ef/448d9a68fbaa66835585337efcc39cf5"
                }}
                style={styles.ImageBackground_757_969}
              />
            </View>
            <View style={styles.View_757_971}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd3d/8a24/1b631d4b84e7155a5ec92a1afceda4a1"
                }}
                style={styles.ImageBackground_757_972}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_778_525}>
          <View style={styles.View_722_6525} />
          <View style={styles.View_722_6531}>
            <Text style={styles.Text_722_6531}>24/7 Support</Text>
          </View>
          <View style={styles.View_722_6532}>
            <Text style={styles.Text_722_6532}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006b/3bdc/55539178cca0a734dfffc62b3f6c271d"
            }}
            style={styles.ImageBackground_757_984}
          />
        </View>
        <View style={styles.View_706_1217}>
          <View style={styles.View_706_1218}>
            <Text style={styles.Text_706_1218}>Features</Text>
          </View>
          <View style={styles.View_706_1219}>
            <Text style={styles.Text_706_1219}>
              Design that solves problems, one product at a time
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_706_943}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/225e/f79e/439ba96bb0227f3b3a32f2535b72221a"
          }}
          style={styles.ImageBackground_706_944}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c018/307b/2c90bbccbe93fed2f3e23125806bd855"
          }}
          style={styles.ImageBackground_706_947}
        />
        <View style={styles.View_773_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a92f/6f62/8c5c2ca26aad34fc73b78a5702780e80"
            }}
            style={styles.ImageBackground_706_946}
          />
          <View style={styles.View_773_547} />
          <View style={styles.View_773_548}>
            <Text style={styles.Text_773_548}>Unisaas Website Design</Text>
          </View>
          <View style={styles.View_773_549}>
            <View style={styles.View_773_550}>
              <Text style={styles.Text_773_550}>View portfolio</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa76/9df9/bd90746dba55beea0264d3a7eca2aac2"
              }}
              style={styles.ImageBackground_773_551}
            />
          </View>
        </View>
        <View style={styles.View_706_952}>
          <View style={styles.View_706_954}>
            <View style={styles.View_706_955}>
              <Text style={styles.Text_706_955}>Read Case Studies</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa76/9df9/bd90746dba55beea0264d3a7eca2aac2"
              }}
              style={styles.ImageBackground_706_956}
            />
          </View>
          <View style={styles.View_706_945} />
          <View style={styles.View_706_953}>
            <Text style={styles.Text_706_953}>
              Workhub office Webflow Webflow Design
            </Text>
          </View>
          <View style={styles.View_706_957}>
            <Text style={styles.Text_706_957}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam{" "}
            </Text>
          </View>
          <View style={styles.View_807_466}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa76/9df9/bd90746dba55beea0264d3a7eca2aac2"
              }}
              style={styles.ImageBackground_807_468}
            />
            <View style={styles.View_807_467}>
              <Text style={styles.Text_807_467}>View project</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_778_520}>
          <View style={styles.View_706_948}>
            <Text style={styles.Text_706_948}>View our projects</Text>
          </View>
          <View style={styles.View_706_949}>
            <View style={styles.View_706_950}>
              <Text style={styles.Text_706_950}>View More</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6e3/0b36/ff3ad6f971c132774ada0fcce7ed2cfb"
              }}
              style={styles.ImageBackground_706_951}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_706_670}>
        <View style={styles.View_706_671} />
        <View style={styles.View_706_679}>
          <View style={styles.View_706_680}>
            <View style={styles.View_706_681}>
              <View style={styles.View_706_684}>
                <Text style={styles.Text_706_684}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </Text>
              </View>
              <View style={styles.View_706_685}>
                <Text style={styles.Text_706_685}>Strategy</Text>
              </View>
              <View style={styles.View_706_686}>
                <View style={styles.View_706_687} />
                <View style={styles.View_706_688}>
                  <View style={styles.View_706_689} />
                  <View style={styles.View_706_690} />
                  <View style={styles.View_706_691} />
                </View>
                <View style={styles.View_706_692}>
                  <Text style={styles.Text_706_692}>01</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_706_693}>
            <View style={styles.View_706_694}>
              <View style={styles.View_706_697}>
                <Text style={styles.Text_706_697}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </Text>
              </View>
              <View style={styles.View_706_698}>
                <Text style={styles.Text_706_698}>Design</Text>
              </View>
              <View style={styles.View_706_699}>
                <View style={styles.View_706_700} />
                <View style={styles.View_706_701}>
                  <View style={styles.View_706_702} />
                  <View style={styles.View_706_703} />
                  <View style={styles.View_706_704} />
                </View>
                <View style={styles.View_706_705}>
                  <Text style={styles.Text_706_705}>03</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_706_706}>
            <View style={styles.View_706_707}>
              <View style={styles.View_706_710}>
                <Text style={styles.Text_706_710}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </Text>
              </View>
              <View style={styles.View_706_711}>
                <Text style={styles.Text_706_711}>Wireframing</Text>
              </View>
              <View style={styles.View_706_712}>
                <View style={styles.View_706_713} />
                <View style={styles.View_706_714}>
                  <View style={styles.View_706_715} />
                  <View style={styles.View_706_716} />
                  <View style={styles.View_706_717} />
                </View>
                <View style={styles.View_706_718}>
                  <Text style={styles.Text_706_718}>02</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_706_719}>
            <View style={styles.View_706_720}>
              <View style={styles.View_706_723}>
                <Text style={styles.Text_706_723}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </Text>
              </View>
              <View style={styles.View_706_724}>
                <Text style={styles.Text_706_724}>Development</Text>
              </View>
              <View style={styles.View_706_725}>
                <View style={styles.View_706_726} />
                <View style={styles.View_706_727}>
                  <View style={styles.View_706_728} />
                  <View style={styles.View_706_729} />
                  <View style={styles.View_706_730} />
                </View>
                <View style={styles.View_706_731}>
                  <Text style={styles.Text_706_731}>04</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_706_673}>
          <View style={styles.View_706_676}>
            <View style={styles.View_706_677}>
              <Text style={styles.Text_706_677}>Get in touch with us</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fb5/5f0b/5f2c97e54fb4a4a50b7519f07ba5a860"
              }}
              style={styles.ImageBackground_706_678}
            />
          </View>
          <View style={styles.View_706_674}>
            <Text style={styles.Text_706_674}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
          </View>
          <View style={styles.View_706_675}>
            <Text style={styles.Text_706_675}>How we work</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_757_680}>
        <View style={styles.View_757_681} />
        <View style={styles.View_757_682}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e91/9bee/48971b3c1285c6474be28b1232e30f35"
            }}
            style={styles.ImageBackground_757_683}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3207/092e/de17c7c41fdc91ad03ba56185721a399"
            }}
            style={styles.ImageBackground_757_684}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c273/f1cc/9561477c3a02839e2d91fd2d17c1fdf7"
            }}
            style={styles.ImageBackground_757_685}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b16b/81e4/de4f93ec9f3768b3fea6c00513c44e78"
            }}
            style={styles.ImageBackground_757_686}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f64/6cc6/d1eb7ff6f9237649ed2e0034ad6a3346"
            }}
            style={styles.ImageBackground_757_687}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b88c/d8a3/68c642be013e90edcf8a3baf594f91c1"
            }}
            style={styles.ImageBackground_757_688}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28c8/4d9a/c8831309b7ae6a08858117b32c28f5bd"
            }}
            style={styles.ImageBackground_757_689}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d755/c4dd/b3993edb750cf182a4eaa20cf6f5bdfd"
            }}
            style={styles.ImageBackground_757_690}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1c/186d/a32be33c7ff2c3a15735e0fec3653d8a"
            }}
            style={styles.ImageBackground_757_691}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1529/6bbc/460e0af1a8cdc343f0aaf0a874925c5d"
            }}
            style={styles.ImageBackground_757_692}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd6/a5ce/7a480d17e5692d0b4c6be56d604c5e48"
            }}
            style={styles.ImageBackground_757_693}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f72/2b93/3c321d6dca3dcb633de7f5e2221c61c1"
            }}
            style={styles.ImageBackground_757_694}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c0/94db/78ec08587f561c7e25bb0173cf868a69"
            }}
            style={styles.ImageBackground_757_695}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c25/bd03/6ae6c7580bb7004db9b8acadeb9b05d8"
            }}
            style={styles.ImageBackground_757_696}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ba5/b286/dcd3bf9afa167c6d6f9d24330a268e7d"
            }}
            style={styles.ImageBackground_757_697}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95fa/6475/1ed7f97047944cbf180543c9eac9b81a"
            }}
            style={styles.ImageBackground_757_698}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cad/df60/a8ad3c71b6102cecbd7f1694022c33c9"
            }}
            style={styles.ImageBackground_757_699}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1893/e8b7/2456ef6b0adb291c8649e5da5bc1145c"
            }}
            style={styles.ImageBackground_757_700}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/800b/f110/d333bd92f27c7e7b42999872c9ecad4f"
            }}
            style={styles.ImageBackground_757_701}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ab/3664/885c1eb9abbed7dbfb65737c44d1b1b3"
            }}
            style={styles.ImageBackground_757_702}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e418/cb03/0c5b55f7305378906247a560ab9db633"
            }}
            style={styles.ImageBackground_757_703}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e7b/c488/98550840191a79f096b6c45f9d414789"
            }}
            style={styles.ImageBackground_757_704}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11ef/f454/ed83dbe6829c1f5cc80e737d5cc2ff5b"
            }}
            style={styles.ImageBackground_757_705}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6684/b97a/6a606a5642f23e05b3254edd97779172"
            }}
            style={styles.ImageBackground_757_706}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be94/bb95/c91b897cedab22c1978cea4a674816e4"
            }}
            style={styles.ImageBackground_757_707}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bf0/a60b/047e46d06f0a1271eca77d29378dd68a"
            }}
            style={styles.ImageBackground_757_708}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c8a/e319/293ef5c5b6cadd618ac57ba333bd155c"
            }}
            style={styles.ImageBackground_757_709}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/548b/f289/6fb4e6c0c7ab1e0a8fc87254926ba9d7"
            }}
            style={styles.ImageBackground_757_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d81b/98a9/ce6f3f58a99f693e3c4defcf81548b70"
            }}
            style={styles.ImageBackground_757_711}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97b0/32c7/7fe6da659a266c7e5af1f6a84c2b616d"
            }}
            style={styles.ImageBackground_757_712}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe6/1e9b/c17d94619489985d1731b307f32a0f76"
            }}
            style={styles.ImageBackground_757_713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f70/5d2e/cca7f3693a58be4947e90b787ce2196a"
            }}
            style={styles.ImageBackground_757_714}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b339/00a4/b99043248c1c8646eacee6abd724903e"
            }}
            style={styles.ImageBackground_757_715}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a4/3dcd/cd4abf2f71e950df3eddc08906231f9e"
            }}
            style={styles.ImageBackground_757_716}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf8/8097/68a01f028816f244eed2bbd6d0a69156"
            }}
            style={styles.ImageBackground_757_717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a654/fc6d/8f5d286f7b7eb198bca8319cae1c5a95"
            }}
            style={styles.ImageBackground_757_718}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e64/a9a4/efcd36f4dc714df54f745fbc37b2524f"
            }}
            style={styles.ImageBackground_757_719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e55/9122/d627da8a2664a16d2dc25a847150dbf5"
            }}
            style={styles.ImageBackground_757_720}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3027/6f77/8b5fdeed06286bdb8ac4bf9ae42cf700"
            }}
            style={styles.ImageBackground_757_721}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05cf/6dd0/855d06fe939d8615930368e657066548"
            }}
            style={styles.ImageBackground_757_722}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3027/6f77/8b5fdeed06286bdb8ac4bf9ae42cf700"
            }}
            style={styles.ImageBackground_757_723}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05cf/6dd0/855d06fe939d8615930368e657066548"
            }}
            style={styles.ImageBackground_757_724}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/539c/1b45/5eda103121d8b93c0ea5be919d899acb"
            }}
            style={styles.ImageBackground_757_725}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc4/c3c7/db919fa5cbeeee07b7953d2e2348cfe9"
            }}
            style={styles.ImageBackground_757_726}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c58/87e7/f77a025724418a37de3c0328492b7b0b"
            }}
            style={styles.ImageBackground_757_727}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2663/20f8/372db4e3349f6e3866a16336816fec64"
            }}
            style={styles.ImageBackground_757_728}
          />
        </View>
        <View style={styles.View_757_729}>
          <View style={styles.View_757_730}>
            <View style={styles.View_757_731}>
              <Text style={styles.Text_757_731}>View Pricing</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd9/3544/fe16d0f94ced4f82e371f6cf9bea0c30"
              }}
              style={styles.ImageBackground_757_732}
            />
          </View>
          <View style={styles.View_757_733}>
            <View style={styles.View_757_734}>
              <Text style={styles.Text_757_734}>View our work</Text>
            </View>
          </View>
          <View style={styles.View_757_735}>
            <View style={styles.View_757_736}>
              <Text style={styles.Text_757_736}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Text>
            </View>
            <View style={styles.View_757_737}>
              <Text style={styles.Text_757_737}>
                Building stellar websites for early startups
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_904_956}>
        <View style={styles.View_I904_956_706_931} />
        <View style={styles.View_I904_956_706_932}>
          <View style={styles.View_I904_956_706_933} />
          <View style={styles.View_I904_956_706_934}>
            <Text style={styles.Text_I904_956_706_934}>Contact us</Text>
          </View>
        </View>
        <View style={styles.View_I904_956_706_935}>
          <Text style={styles.Text_I904_956_706_935}>Home</Text>
        </View>
        <View style={styles.View_I904_956_706_937}>
          <Text style={styles.Text_I904_956_706_937}>About us</Text>
        </View>
        <View style={styles.View_I904_956_706_938}>
          <Text style={styles.Text_I904_956_706_938}>Features</Text>
        </View>
        <View style={styles.View_I904_956_706_939}>
          <Text style={styles.Text_I904_956_706_939}>Pricing</Text>
        </View>
        <View style={styles.View_I904_956_706_940}>
          <Text style={styles.Text_I904_956_706_940}>FAQ</Text>
        </View>
        <View style={styles.View_I904_956_706_941}>
          <Text style={styles.Text_I904_956_706_941}>Blog</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ef/4a3c/3e7356eb798de2cf0baef6eb6e83db47"
          }}
          style={styles.ImageBackground_I904_956_1117_483}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("966%") },
  View_904_537: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("899%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I904_537_547_576: {
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
  View_I904_537_706_538: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%")
  },
  View_I904_537_705_523: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_I904_537_705_524: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I904_537_705_526: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I904_537_705_528: {
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
  ImageBackground_I904_537_705_529: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_537_705_533: {
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
  ImageBackground_I904_537_705_534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_537_705_522: {
    width: wp("25%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_705_522: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_706_577: {
    width: wp("25%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_706_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_705_521: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_705_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_706_539: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%")
  },
  View_I904_537_547_578: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I904_537_547_604: {
    width: wp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_604: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_547_583: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_583: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_547_584: {
    width: wp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_547_585: {
    width: wp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_547_586: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_586: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_547_587: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_587: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_547_588: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_547_588: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I904_537_547_589: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%")
  },
  View_I904_537_778_990: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("41%")
  },
  View_I904_537_706_578: {
    width: wp("32%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_I904_537_706_579: {
    width: wp("21%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I904_537_706_581: {
    width: wp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_706_581: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_706_582: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_706_582: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_706_584: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_706_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_537_706_585: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_537_706_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_737: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("781%")
  },
  View_706_738: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_738: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_739: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_706_742: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%")
  },
  View_706_743: {
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
  Text_706_743: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_744: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_706_741: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_706_741: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_740: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_706_740: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_746: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_706_746: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_745: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_747: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("17%")
  },
  View_706_750: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%")
  },
  View_706_751: {
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
  Text_706_751: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_752: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_706_749: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_706_749: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_748: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_706_748: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_754: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_706_754: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_753: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_755: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("17%")
  },
  View_706_758: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%")
  },
  View_706_759: {
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
  Text_706_759: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_760: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_706_757: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_706_757: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_756: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_706_756: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_762: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_706_762: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_761: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_793: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("669%")
  },
  View_706_794: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_757_753: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_795: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)",
    opacity: 0.5
  },
  View_706_796: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  View_706_797: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_706_797: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_798: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_798: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 43,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_799: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_706_800: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_758_767: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("83%")
  },
  View_758_768: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_758_768: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_758_769: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%")
  },
  View_706_801: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("71%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_I706_801_48_32: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I706_801_48_32: {
    color: "rgba(27, 28, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_802: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_706_802: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_803: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_706_803: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_804: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("35%")
  },
  View_706_805: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5
  },
  View_706_806: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5
  },
  View_706_807: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5
  },
  View_706_808: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_706_809: {
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
  Text_706_809: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_810: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_706_810: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_811: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_706_811: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_763: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("578%")
  },
  View_706_764: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("1%")
  },
  View_706_765: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("67%")
  },
  ImageBackground_706_766: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%")
  },
  View_706_767: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_767: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_768: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_768: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_769: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%")
  },
  View_706_770: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("54%")
  },
  ImageBackground_706_771: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%")
  },
  View_706_772: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_772: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_773: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_773: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_774: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%")
  },
  View_706_775: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("40%")
  },
  ImageBackground_706_776: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%")
  },
  View_706_777: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_777: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_778: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_778: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_779: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_706_780: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("27%")
  },
  ImageBackground_706_781: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%")
  },
  View_706_782: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_782: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_783: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_783: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_784: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_706_785: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_706_786: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_706_786: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_787: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%")
  },
  View_706_788: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_788: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_789: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_789: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_790: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_791: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_791: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_792: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_792: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_872: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_873: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_706_874: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("30%")
  },
  ImageBackground_706_875: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_706_876: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_706_877: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("33%")
  },
  ImageBackground_706_878: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("34%")
  },
  ImageBackground_706_879: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("12%")
  },
  ImageBackground_706_880: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("13%")
  },
  ImageBackground_706_881: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("16%")
  },
  ImageBackground_706_882: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("17%")
  },
  ImageBackground_706_883: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("17%")
  },
  ImageBackground_706_884: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_706_885: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_706_886: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%")
  },
  ImageBackground_706_887: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%")
  },
  ImageBackground_706_888: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%")
  },
  ImageBackground_706_889: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%")
  },
  ImageBackground_706_890: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  ImageBackground_706_891: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("23%")
  },
  ImageBackground_706_892: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("23%")
  },
  ImageBackground_706_893: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("25%")
  },
  ImageBackground_706_894: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("27%")
  },
  ImageBackground_706_895: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("27%")
  },
  ImageBackground_706_896: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("36%")
  },
  ImageBackground_706_897: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("36%")
  },
  ImageBackground_706_898: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("31%")
  },
  ImageBackground_706_899: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("31%")
  },
  ImageBackground_706_900: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%")
  },
  ImageBackground_706_901: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("29%")
  },
  ImageBackground_706_902: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("29%")
  },
  ImageBackground_706_903: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("34%")
  },
  ImageBackground_706_904: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  ImageBackground_706_905: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  ImageBackground_706_906: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  ImageBackground_706_907: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%")
  },
  ImageBackground_706_908: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  ImageBackground_706_909: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("18%")
  },
  ImageBackground_706_910: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("28%")
  },
  ImageBackground_706_911: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("24%")
  },
  ImageBackground_706_912: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("22%")
  },
  ImageBackground_706_913: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%")
  },
  ImageBackground_706_914: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%")
  },
  ImageBackground_706_915: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("30%")
  },
  ImageBackground_706_916: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("30%")
  },
  ImageBackground_706_917: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("19%")
  },
  ImageBackground_706_918: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%")
  },
  ImageBackground_706_919: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("20%")
  },
  ImageBackground_706_920: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("20%")
  },
  View_706_921: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("27%")
  },
  View_706_922: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("44%")
  },
  View_706_923: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_923: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_924: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_706_925: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_706_926: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_706_926: {
    color: "rgba(27, 28, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_927: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_928: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_706_928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_929: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_929: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 43,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1014: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("491%")
  },
  View_706_1015: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_706_1017: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("18%")
  },
  View_706_1018: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1018: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1019: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_1019: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1020: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("17%")
  },
  View_706_1021: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1021: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1022: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  View_757_795: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_757_796: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_757_797: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_706_1024: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1024: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1025: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_706_1025: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1026: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("28%")
  },
  View_706_1027: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_706_1028: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_1030: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_706_1031: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_1032: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_706_1034: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_778_529: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("163%"),
    minHeight: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("329%")
  },
  View_706_1216: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("163%"),
    minHeight: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_778_524: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("56%")
  },
  View_706_1240: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_706_1246: {
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
  Text_706_1246: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1247: {
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
  Text_706_1247: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_976: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_778_521: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("56%")
  },
  View_706_1222: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_706_1229: {
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
  Text_706_1229: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1228: {
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
  Text_706_1228: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_805: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_778_522: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("56%")
  },
  View_706_1231: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_706_1237: {
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
  Text_706_1237: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1238: {
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
  Text_706_1238: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_843: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_778_526: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("102%")
  },
  View_722_6534: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_722_6540: {
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
  Text_722_6540: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_722_6541: {
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
  Text_722_6541: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_919: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_778_527: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("102%")
  },
  View_722_6543: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_722_6549: {
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
  Text_722_6549: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_722_6550: {
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
  Text_722_6550: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_757_974: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_757_959: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_757_960: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_962: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_757_963: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_965: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_757_966: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_968: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_757_969: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_757_971: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_757_972: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_778_525: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("102%")
  },
  View_722_6525: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_722_6531: {
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
  Text_722_6531: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_722_6532: {
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
  Text_722_6532: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_984: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_706_1217: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("17%")
  },
  View_706_1218: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_1218: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_1219: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_706_1219: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_943: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("212%")
  },
  ImageBackground_706_944: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  ImageBackground_706_947: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("61%"),
    resizeMode: "cover"
  },
  View_773_546: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("17%")
  },
  ImageBackground_706_946: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_773_547: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_773_548: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_773_548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_773_549: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%")
  },
  View_773_550: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_773_550: {
    color: "rgba(252, 217, 128, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_773_551: {
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
  View_706_952: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_706_954: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("69%")
  },
  View_706_955: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_955: {
    color: "rgba(252, 217, 128, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_956: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%")
  },
  View_706_945: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_953: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_706_953: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_957: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_706_957: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_807_466: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("68%")
  },
  ImageBackground_807_468: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_807_467: {
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
  Text_807_467: {
    color: "rgba(252, 217, 128, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_778_520: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_948: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_948: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_949: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("3%")
  },
  View_706_950: {
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
  Text_706_950: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_951: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_706_670: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  View_706_671: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 252, 1)"
  },
  View_706_679: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("17%")
  },
  View_706_680: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_681: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_684: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_684: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_685: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_706_685: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_686: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_687: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 5, 242, 1)"
  },
  View_706_688: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_689: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(92, 94, 132, 1)"
  },
  View_706_690: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_706_691: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("-1%"),
    backgroundColor: "rgba(82, 57, 250, 1)"
  },
  View_706_692: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_706_692: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_693: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  View_706_694: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_697: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_697: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_698: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_706_698: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_699: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_700: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 5, 242, 1)"
  },
  View_706_701: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_702: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(92, 94, 132, 1)"
  },
  View_706_703: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_706_704: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("-1%"),
    backgroundColor: "rgba(82, 57, 250, 1)"
  },
  View_706_705: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_706_705: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_706: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_706_707: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_710: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_710: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_711: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_706_711: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_712: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_713: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 5, 242, 1)"
  },
  View_706_714: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_715: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(92, 94, 132, 1)"
  },
  View_706_716: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_706_717: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("-1%"),
    backgroundColor: "rgba(82, 57, 250, 1)"
  },
  View_706_718: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_706_718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_719: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("31%")
  },
  View_706_720: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_723: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_706_723: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_724: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_706_724: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_725: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_726: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 5, 242, 1)"
  },
  View_706_727: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_706_728: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(92, 94, 132, 1)"
  },
  View_706_729: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_706_730: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("-1%"),
    backgroundColor: "rgba(82, 57, 250, 1)"
  },
  View_706_731: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_706_731: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_673: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("17%")
  },
  View_706_676: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  View_706_677: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_677: {
    color: "rgba(36, 5, 242, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_706_678: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%")
  },
  View_706_674: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_706_674: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_706_675: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_706_675: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_757_680: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_757_681: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_757_682: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("33%")
  },
  ImageBackground_757_683: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_757_684: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_757_685: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("38%")
  },
  ImageBackground_757_686: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("39%")
  },
  ImageBackground_757_687: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("13%")
  },
  ImageBackground_757_688: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("14%")
  },
  ImageBackground_757_689: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("18%")
  },
  ImageBackground_757_690: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("19%")
  },
  ImageBackground_757_691: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("19%")
  },
  ImageBackground_757_692: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_757_693: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_757_694: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%")
  },
  ImageBackground_757_695: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%")
  },
  ImageBackground_757_696: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%")
  },
  ImageBackground_757_697: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%")
  },
  ImageBackground_757_698: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  ImageBackground_757_699: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("26%")
  },
  ImageBackground_757_700: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("26%")
  },
  ImageBackground_757_701: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("28%")
  },
  ImageBackground_757_702: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%")
  },
  ImageBackground_757_703: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("31%")
  },
  ImageBackground_757_704: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("41%")
  },
  ImageBackground_757_705: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("41%")
  },
  ImageBackground_757_706: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("36%")
  },
  ImageBackground_757_707: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("36%")
  },
  ImageBackground_757_708: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("36%")
  },
  ImageBackground_757_709: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("33%")
  },
  ImageBackground_757_710: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("33%")
  },
  ImageBackground_757_711: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("38%")
  },
  ImageBackground_757_712: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  ImageBackground_757_713: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%")
  },
  ImageBackground_757_714: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%")
  },
  ImageBackground_757_715: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%")
  },
  ImageBackground_757_716: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%")
  },
  ImageBackground_757_717: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("21%")
  },
  ImageBackground_757_718: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("31%")
  },
  ImageBackground_757_719: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("27%")
  },
  ImageBackground_757_720: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("25%")
  },
  ImageBackground_757_721: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("20%")
  },
  ImageBackground_757_722: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("20%")
  },
  ImageBackground_757_723: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("34%")
  },
  ImageBackground_757_724: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("34%")
  },
  ImageBackground_757_725: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("22%")
  },
  ImageBackground_757_726: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("25%")
  },
  ImageBackground_757_727: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%")
  },
  ImageBackground_757_728: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%")
  },
  View_757_729: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("30%")
  },
  View_757_730: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("50%")
  },
  View_757_731: {
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
  Text_757_731: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_757_732: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_757_733: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_757_734: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_757_734: {
    color: "rgba(27, 28, 43, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_757_735: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_757_736: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_757_736: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_757_737: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_757_737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 43,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_956: {
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
  View_I904_956_706_931: {
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
  View_I904_956_706_932: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I904_956_706_933: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I904_956_706_934: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_956_706_935: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_956_706_937: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_937: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_956_706_938: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_938: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_956_706_939: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_939: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_956_706_940: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_940: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_956_706_941: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I904_956_706_941: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I904_956_1117_483: {
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
