import { FileType } from './model';
import { readPrincipleFile } from './utility';
export const getPrinciples = async () => [
  {
    title: 'SINGLE REPSONSIBILITY',
    description:
      'Each module should be responsible to one, and only one, actor',
    codeBefore: await readPrincipleFile(
      'single-responsibilty',
      FileType.before
    ),
    codeAfter: await readPrincipleFile('single-responsibilty', FileType.after),
  },
  {
    title: 'OPEN-CLOSED',
    description:
      'Software entities (classes, modules, functions, and so on) should be open for extension, but closed for modification',
    codeBefore: await readPrincipleFile('open-closed', FileType.before),
    codeAfter: await readPrincipleFile('open-closed', FileType.after),
  },
  {
    title: 'LISKOV SUBSTITUTION',
    description: `If S is a subtype of T, then objects of type T in a program may be replaced
    with objects of type S without altering any of the desirable properties of that program.`,
    codeBefore: await readPrincipleFile('liskov-substitution', FileType.before),
    codeAfter: await readPrincipleFile('liskov-substitution', FileType.after),
  },
  {
    title: 'INTERFACE SAGGRIGATION',
    description:
      'Clients should not be forced to depend upon interfaces that they do not use.',
    codeBefore: await readPrincipleFile(
      'interface-saggrigation',
      FileType.before
    ),
    codeAfter: await readPrincipleFile(
      'interface-saggrigation',
      FileType.after
    ),
  },
  {
    title: 'DEPENDENCY INVVERSION',
    description:
      'Most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions',
    codeBefore: await readPrincipleFile(
      'dependency-inversion',
      FileType.before
    ),
    codeAfter: await readPrincipleFile('dependency-inversion', FileType.after),
  },
];
