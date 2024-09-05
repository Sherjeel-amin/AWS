import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';

export class SimpleStepFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define a Pass state
    const passState = new sfn.Pass(this, 'PassState', {
      result: sfn.Result.fromObject({ message: "Hello from Pass State!" }),
      resultPath: '$.result',
    });

    // Define a Fail state
    const failState = new sfn.Fail(this, 'FailState', {
      error: 'Error',
      cause: 'Failure',
    });

    // Define the state machine's flow
    const definition = passState.next(failState);

    // Create the state machine
    new sfn.StateMachine(this, 'MyStateMachine', {
      definitionBody: sfn.DefinitionBody.fromChainable(definition),
      timeout: cdk.Duration.minutes(5),
    });
  }
}
