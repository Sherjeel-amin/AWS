#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyCDKDemoAppStack } from '../lib/my_cdk_demo_app-stack';
import { SimpleStepFunctionStack } from '../lib/SimpleStepFunctionStack';  
const app = new cdk.App();

// Instantiate both stacks
new MyCDKDemoAppStack(app, 'MyCdkDemoAppStack');

// Add this line to instantiate the StepFunctionProcessingStack
new SimpleStepFunctionStack(app, 'UniqueStackName');
