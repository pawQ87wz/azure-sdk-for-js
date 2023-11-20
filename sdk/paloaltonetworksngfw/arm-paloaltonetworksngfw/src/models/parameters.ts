/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  GlobalRulestackResource as GlobalRulestackResourceMapper,
  GlobalRulestackResourceUpdate as GlobalRulestackResourceUpdateMapper,
  CertificateObjectGlobalRulestackResource as CertificateObjectGlobalRulestackResourceMapper,
  FqdnListGlobalRulestackResource as FqdnListGlobalRulestackResourceMapper,
  PostRulesResource as PostRulesResourceMapper,
  PrefixListGlobalRulestackResource as PrefixListGlobalRulestackResourceMapper,
  PreRulesResource as PreRulesResourceMapper,
  FirewallResource as FirewallResourceMapper,
  FirewallResourceUpdate as FirewallResourceUpdateMapper,
  LogSettings as LogSettingsMapper,
  LocalRulestackResource as LocalRulestackResourceMapper,
  LocalRulestackResourceUpdate as LocalRulestackResourceUpdateMapper,
  CertificateObjectLocalRulestackResource as CertificateObjectLocalRulestackResourceMapper,
  FqdnListLocalRulestackResource as FqdnListLocalRulestackResourceMapper,
  LocalRulesResource as LocalRulesResourceMapper,
  PrefixListResource as PrefixListResourceMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-09-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const globalRulestackName: OperationURLParameter = {
  parameterPath: "globalRulestackName",
  mapper: {
    serializedName: "globalRulestackName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: GlobalRulestackResourceMapper
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: GlobalRulestackResourceUpdateMapper
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    serializedName: "skip",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "top",
    type: {
      name: "Number"
    }
  }
};

export const typeParam: OperationQueryParameter = {
  parameterPath: "typeParam",
  mapper: {
    serializedName: "type",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const appIdVersion: OperationQueryParameter = {
  parameterPath: ["options", "appIdVersion"],
  mapper: {
    serializedName: "appIdVersion",
    type: {
      name: "String"
    }
  }
};

export const appPrefix: OperationQueryParameter = {
  parameterPath: ["options", "appPrefix"],
  mapper: {
    serializedName: "appPrefix",
    type: {
      name: "String"
    }
  }
};

export const typeParam1: OperationQueryParameter = {
  parameterPath: "typeParam",
  mapper: {
    serializedName: "type",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: CertificateObjectGlobalRulestackResourceMapper
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: FqdnListGlobalRulestackResourceMapper
};

export const priority: OperationURLParameter = {
  parameterPath: "priority",
  mapper: {
    serializedName: "priority",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource3: OperationParameter = {
  parameterPath: "resource",
  mapper: PostRulesResourceMapper
};

export const firewallName: OperationQueryParameter = {
  parameterPath: ["options", "firewallName"],
  mapper: {
    serializedName: "firewallName",
    type: {
      name: "String"
    }
  }
};

export const resource4: OperationParameter = {
  parameterPath: "resource",
  mapper: PrefixListGlobalRulestackResourceMapper
};

export const resource5: OperationParameter = {
  parameterPath: "resource",
  mapper: PreRulesResourceMapper
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const firewallName1: OperationURLParameter = {
  parameterPath: "firewallName",
  mapper: {
    serializedName: "firewallName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource6: OperationParameter = {
  parameterPath: "resource",
  mapper: FirewallResourceMapper
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: FirewallResourceUpdateMapper
};

export const email: OperationQueryParameter = {
  parameterPath: ["options", "email"],
  mapper: {
    serializedName: "email",
    type: {
      name: "String"
    }
  }
};

export const logSettings: OperationParameter = {
  parameterPath: ["options", "logSettings"],
  mapper: LogSettingsMapper
};

export const localRulestackName: OperationURLParameter = {
  parameterPath: "localRulestackName",
  mapper: {
    serializedName: "localRulestackName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource7: OperationParameter = {
  parameterPath: "resource",
  mapper: LocalRulestackResourceMapper
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: LocalRulestackResourceUpdateMapper
};

export const resource8: OperationParameter = {
  parameterPath: "resource",
  mapper: CertificateObjectLocalRulestackResourceMapper
};

export const resource9: OperationParameter = {
  parameterPath: "resource",
  mapper: FqdnListLocalRulestackResourceMapper
};

export const resource10: OperationParameter = {
  parameterPath: "resource",
  mapper: LocalRulesResourceMapper
};

export const resource11: OperationParameter = {
  parameterPath: "resource",
  mapper: PrefixListResourceMapper
};
