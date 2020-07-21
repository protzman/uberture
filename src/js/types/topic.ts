export class Topic {
  static readonly GOVERNMENT_AND_POLITICS = new Topic(
    "GOVERNMENT_AND_POLITICS",
    "government",
    "Government and Politics"
  );
  static readonly ADVERTISING = new Topic(
    "ADVERTISING",
    "advertising",
    "Advertising"
  );
  static readonly WORLD_EVENTS_AND_MILITARY = new Topic(
    "WORLD_EVENTS_AND_MILITARY",
    "world",
    "World Events and Military"
  );
  static readonly RELIGION_AND_INTL_RELATIONS = new Topic(
    "RELIGION_AND_INTL_RELATIONS",
    "religion",
    "Religion and Intl Relations"
  );
  static readonly ENERGY = new Topic("ENERGY", "energy", "Energy");
  static readonly LOCAL_NEWS = new Topic("LOCAL_NEWS", "local", "Local News");
  static readonly DOMESTIC = new Topic("DOMESTIC", "domestic", "Domestic");
  static readonly WEATHER = new Topic("WEATHER", "weather", "Weather");
  static readonly MIDDLE_EAST = new Topic(
    "MIDDLE_EAST",
    "middle",
    "Middle East"
  );
  static readonly SOCIAL_ISSUES = new Topic(
    "SOCIAL_ISSUES",
    "social",
    "Social Issues"
  );

  private constructor(
    private readonly key: string,
    public readonly tag: string,
    public readonly label: string
  ) {}

  toString() {
    return this.key;
  }
}
