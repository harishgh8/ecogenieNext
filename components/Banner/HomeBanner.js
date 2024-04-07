import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Launch Your RN Career in Canada
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Are you a registered nurse from India looking to
                            pursue a rewarding career in Canada? Propulse Next
                            Gen Learning is your one-stop solution for a
                            seamless transition. We provide comprehensive
                            support to help you immigrate, obtain your Canadian
                            nursing license, and land your dream job.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button
                                href="#features"
                                className="btn btn--tertiary"
                            >
                                Our Services
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup className="hidden md:block mt-2">
                            <Link href="/Enroll">
                                <div className="btn btn--secondary ml-4 text-white">
                                    Enroll Now
                                    <Icon icon="material-symbols:arrow-forward-rounded" />
                                </div>
                            </Link>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/pageBanner.jpg"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
