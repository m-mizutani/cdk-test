import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class CdkTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "TestFunc", {
      runtime: lambda.Runtime.GO_1_X,
      handler: "TestFunc",
      code: lambda.Code.asset("./build"),
    });
  }
}
