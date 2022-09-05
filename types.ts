type numberVariants = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
];
type opacity = 10 | 20 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

type percentageVariants12 = [
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12'
];
type percentageVariants6 = ['1/6', '2/6', '3/6', '4/6', '5/6'];
type percentageVariants5 = ['1/5', '2/5', '3/5', '4/5'];
type percentageVariants4 = ['1/4', '2/4', '3/4'];
type percentageVariants3 = ['1/2', '1/3', '2/3'];
type sizeSpecificVariants = ['auto', 'full', 'screen', 'min', 'max', 'fit'];
type remVariants = [
  '0',
  'px',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96'
];
type marginPrefixVariants = ['', 'x', 'y', 't', 'r', 'b', 'l'];
type zIndexVariants = ['0', '10', '20', '30', '40', '50'];
type integerVariants = ['', '-'];
type colorsWithNoVariant = ['inherit', 'current', 'transparent', 'black'];
type colorsWithVariants = [
  'white',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
];

// type see = remVariants['length']

type remVariantsUnion =
  | remVariants[number]
  | percentageVariants12[number]
  | percentageVariants6[number]
  | percentageVariants5[number]
  | percentageVariants4[number]
  | percentageVariants3[number]
  | sizeSpecificVariants[number];
type widthVariantsUnions =
  | remVariants[number]
  | percentageVariants12[number]
  | percentageVariants6[number]
  | percentageVariants5[number]
  | percentageVariants4[number]
  | percentageVariants3[number]
  | sizeSpecificVariants[number];
type heightVariantsUnions =
  | remVariants[number]
  | percentageVariants6[number]
  | percentageVariants5[number]
  | percentageVariants4[number]
  | percentageVariants3[number]
  | sizeSpecificVariants[number];
type marginVariantsUnions = remVariants[number];
type zIndexVariantsUnions = zIndexVariants[number];
type integerVariantsUnion = integerVariants[number];
type colorsWithVariantsUnion = colorsWithVariants[number];
type colorsWithNoVariantsUnion = colorsWithNoVariant[number];
type numberVariantsUnion = numberVariants[number];

type widthClasses = `w-${widthVariantsUnions}`;
//   ^?

type heightClasses = `h-${heightVariantsUnions}`;
//   ^?

type marginClasses =
  | `m${marginPrefixVariants[number]}-${marginVariantsUnions}`
  | `-m${marginPrefixVariants[number]}-${marginVariantsUnions}`
  | `m${marginPrefixVariants[number]}-auto`;
//   ^?

type paddingClassesUnion =
  | `p${marginPrefixVariants[number]}-${marginVariantsUnions}`
  | `-p${marginPrefixVariants[number]}-${marginVariantsUnions}`
  | `p${marginPrefixVariants[number]}-auto`;
//   ^?

type paddingClasses = paddingClassesUnion | Omit<string, paddingClassesUnion>;
//  ^?
export type zIndexClasses =
  | `${integerVariantsUnion}z-${zIndexVariantsUnions}`
  | `z-${sizeSpecificVariants[0]}`
  | `${integerVariantsUnion}z-[${number}]`;
//    ^?

export type bgColor =
  | `bg-${colorsWithVariantsUnion}-${numberVariantsUnion}/${opacity}`
  | `bg-${colorsWithVariantsUnion}-${numberVariantsUnion}`
  | `bg-${colorsWithNoVariantsUnion}`
  | `bg-[#${string}]`;

export type textColor =
  | `text-${colorsWithVariantsUnion}-${numberVariantsUnion}/${opacity}`
  | `text-${colorsWithVariantsUnion}-${numberVariantsUnion}`
  | `text-${colorsWithNoVariantsUnion}`
  | `text-[#${string}]`;

export type validTailwindClasses = textColor | bgColor | zIndexClasses;

export type Tailwind<S> = S extends validTailwindClasses
  ? S
  : S extends `${infer Class} ${infer Rest}`
  ? Class extends validTailwindClasses
    ? `${Class} ${Tailwind<Rest>}`
    : never
  : never;

type see = Tailwind<'text-rose-500 z-[50]'>;
