import { expect } from "chai";
import { FASTDesignSystem, fastDesignSystemDefaults } from "../fast-design-system";
import {
    neutralLayerCard,
    neutralLayerCardContainer,
    neutralLayerFloating,
    neutralLayerL1,
    neutralLayerL2,
    neutralLayerL3,
    neutralLayerL4,
    StandardLuminance,
} from "./neutral-layer";
import {
    neutralLayerFloating as neutralLayerFloatingNew
} from '../color-vNext/recipes/neutral-layer-floating';
import {
    neutralLayerCard as neutralLayerCardNew
} from '../color-vNext/recipes/neutral-layer-card';
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { neutralBaseColor } from "./color-constants";
import { PaletteRGB } from "../color-vNext/palette";
import { SwatchRGB } from "../color-vNext/swatch";

const lightModeDesignSystem: FASTDesignSystem = Object.assign(
    {},
    fastDesignSystemDefaults,
    {
        baseLayerLuminance: StandardLuminance.LightMode,
    }
);

const darkModeDesignSystem: FASTDesignSystem = Object.assign(
    {},
    fastDesignSystemDefaults,
    {
        baseLayerLuminance: StandardLuminance.DarkMode,
    }
);

const enum NeutralPaletteLightModeOffsets {
    L1 = 0,
    L2 = 10,
    L3 = 13,
    L4 = 16,
}

const enum NeutralPaletteDarkModeOffsets {
    L1 = 76,
    L2 = 79,
    L3 = 82,
    L4 = 85,
}

describe("neutralLayer", (): void => {
    describe("L1", (): void => {
        it("should return values from L1 when in light mode", (): void => {
            expect(neutralLayerL1(lightModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L1]
            );
        });
        it("should return values from L1 when in dark mode", (): void => {
            expect(neutralLayerL1(darkModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L1]
            );
        });
        it("should operate on a provided background color", (): void => {
            expect(
                neutralLayerL1((): string => "#000000")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L1]
            );
            expect(
                neutralLayerL1((): string => "#FFFFFF")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L1]
            );
        });
    });

    describe("L2", (): void => {
        it("should return values from L2 when in light mode", (): void => {
            expect(neutralLayerL2(lightModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L2]
            );
        });
        it("should return values from L2 when in dark mode", (): void => {
            expect(neutralLayerL2(darkModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L2]
            );
        });
        it("should operate on a provided background color", (): void => {
            expect(
                neutralLayerL2((): string => "#000000")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L2]
            );
            expect(
                neutralLayerL2((): string => "#FFFFFF")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L2]
            );
        });
    });

    describe("L3", (): void => {
        it("should return values from L3 when in light mode", (): void => {
            expect(neutralLayerL3(lightModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L3]
            );
        });
        it("should return values from L3 when in dark mode", (): void => {
            expect(neutralLayerL3(darkModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L3]
            );
        });
        it("should operate on a provided background color", (): void => {
            expect(
                neutralLayerL3((): string => "#000000")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L3]
            );
            expect(
                neutralLayerL3((): string => "#FFFFFF")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L3]
            );
        });
    });

    describe("L4", (): void => {
        it("should return values from L4 when in light mode", (): void => {
            expect(neutralLayerL4(lightModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L4]
            );
        });
        it("should return values from L4 when in dark mode", (): void => {
            expect(neutralLayerL4(darkModeDesignSystem)).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L4]
            );
        });
        it("should operate on a provided background color", (): void => {
            expect(
                neutralLayerL4((): string => "#000000")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteDarkModeOffsets.L4]
            );
            expect(
                neutralLayerL4((): string => "#FFFFFF")(fastDesignSystemDefaults)
            ).to.equal(
                fastDesignSystemDefaults.neutralPalette[NeutralPaletteLightModeOffsets.L4]
            );
        });
    });

    describe("neutralLayerFloating", (): void => {
        it("should return a color from the neutral palette", (): void => {
            expect(
                fastDesignSystemDefaults.neutralPalette.includes(
                    neutralLayerFloating(fastDesignSystemDefaults)
                )
            ).to.be.ok;
        });

        it("should operate on a provided background color", (): void => {
            const color: string = neutralLayerFloating((): string => "#FFFFFF")(
                fastDesignSystemDefaults
            );

            expect(color).not.to.equal(neutralLayerFloating(fastDesignSystemDefaults));
            expect(fastDesignSystemDefaults.neutralPalette.includes(color)).to.be.ok;
        });
        
        it("should have a new implementation that matches the old implementation", () => {
             const color = (parseColorHexRGB(neutralBaseColor)!)
            const palette = PaletteRGB.from(new SwatchRGB(color.r, color.g, color.b));
            expect(neutralLayerFloating(lightModeDesignSystem)).to.equal(neutralLayerFloatingNew(palette, StandardLuminance.LightMode, lightModeDesignSystem.neutralFillCardDelta).toColorString().toUpperCase())
            expect(neutralLayerFloating(darkModeDesignSystem)).to.equal(neutralLayerFloatingNew(palette, StandardLuminance.DarkMode, lightModeDesignSystem.neutralFillCardDelta).toColorString().toUpperCase())
        })
    });
    describe("neutralLayerCardContainer", (): void => {
        it("should return a color from the neutral palette", (): void => {
            expect(
                fastDesignSystemDefaults.neutralPalette.includes(
                    neutralLayerCardContainer(fastDesignSystemDefaults)
                )
            ).to.be.ok;
        });
        it("should operate on a provided background color", (): void => {
            const color: string = neutralLayerCardContainer((): string => "#FFFFFF")(
                fastDesignSystemDefaults
            );

            expect(color).not.to.equal(
                neutralLayerCardContainer(fastDesignSystemDefaults)
            );
            expect(fastDesignSystemDefaults.neutralPalette.includes(color)).to.be.ok;
        });
    });
    describe("neutralLayerCard", (): void => {
        it("should return a color from the neutral palette", (): void => {
            expect(
                fastDesignSystemDefaults.neutralPalette.includes(
                    neutralLayerCard(fastDesignSystemDefaults)
                )
            ).to.be.ok;
        });
        it("should operate on a provided background color", (): void => {
            const color: string = neutralLayerCard((): string => "#FFFFFF")(
                fastDesignSystemDefaults
            );

            expect(color).not.to.equal(neutralLayerCard(fastDesignSystemDefaults));
            expect(fastDesignSystemDefaults.neutralPalette.includes(color)).to.be.ok;
        });
        it("should have a new implementation that matches the old implementation", () => {
             const color = (parseColorHexRGB(neutralBaseColor)!)
            const palette = PaletteRGB.from(new SwatchRGB(color.r, color.g, color.b));
            expect(neutralLayerCard(lightModeDesignSystem)).to.equal(neutralLayerCardNew(palette, StandardLuminance.LightMode, lightModeDesignSystem.neutralFillCardDelta).toColorString().toUpperCase())
            expect(neutralLayerCard(darkModeDesignSystem)).to.equal(neutralLayerCardNew(palette, StandardLuminance.DarkMode, lightModeDesignSystem.neutralFillCardDelta).toColorString().toUpperCase())
        })
    });
});